<script setup lang="ts">
import { marked } from 'marked'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    messages: ChatMessage[]
    speed?: number
    userAvatar?: string
    assistantAvatar?: string
    title?: string
    autoStart?: boolean
  }>(),
  {
    speed: 30,
    userAvatar: '👤',
    assistantAvatar: '🤖',
    title: 'AI 对话回放',
    autoStart: false,
  },
)

const emit = defineEmits<{
  complete: []
}>()

marked.setOptions({
  gfm: true,
  breaks: true,
})

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

type DisplayedRole = 'user' | 'assistant' | 'loading'

interface DisplayedMessage {
  role: DisplayedRole
  rawContent: string
  isTyping: boolean
}

const displayedMessages = ref<DisplayedMessage[]>([])
const currentSpeed = ref(props.speed)
const isPlaying = ref(false)
const isCompleted = ref(false)
const chatBodyRef = ref<HTMLElement | null>(null)
const copiedIndex = ref<number | null>(null)

let typeTimer: ReturnType<typeof setTimeout> | null = null
let messageTimer: ReturnType<typeof setTimeout> | null = null
let loadingTimer: ReturnType<typeof setTimeout> | null = null

function clearAllTimers() {
  if (typeTimer) {
    clearTimeout(typeTimer)
    typeTimer = null
  }
  if (messageTimer) {
    clearTimeout(messageTimer)
    messageTimer = null
  }
  if (loadingTimer) {
    clearTimeout(loadingTimer)
    loadingTimer = null
  }
}

function reset() {
  clearAllTimers()
  displayedMessages.value = []
  isPlaying.value = false
  isCompleted.value = false
}

async function scrollToBottom() {
  await nextTick()
  if (chatBodyRef.value) {
    chatBodyRef.value.scrollTop = chatBodyRef.value.scrollHeight
  }
}

function getRenderedHtml(raw: string): string {
  try {
    return marked.parse(raw, { async: false }) as string
  }
  catch {
    return raw
  }
}

const renderedMessages = computed(() =>
  displayedMessages.value.map(m => ({
    ...m,
    html: m.role === 'loading' ? '' : getRenderedHtml(m.rawContent),
  })),
)

function randomThinkDelay(): number {
  return 1500 + Math.random() * 1500
}

function showLoadingBeforeAssistant(onComplete: () => void) {
  const loadingIndex = displayedMessages.value.length
  displayedMessages.value.push({ role: 'loading', rawContent: '', isTyping: false })
  void scrollToBottom()

  loadingTimer = setTimeout(() => {
    displayedMessages.value.splice(loadingIndex, 1)
    onComplete()
  }, randomThinkDelay())
}

function typeAssistantMessage(content: string, onComplete: () => void) {
  const msgIndex = displayedMessages.value.length
  displayedMessages.value.push({ role: 'assistant', rawContent: '', isTyping: true })

  let charIndex = 0
  const typeNext = () => {
    if (charIndex < content.length) {
      displayedMessages.value[msgIndex].rawContent += content[charIndex]
      charIndex++
      void scrollToBottom()
      typeTimer = setTimeout(typeNext, currentSpeed.value)
    }
    else {
      displayedMessages.value[msgIndex].isTyping = false
      void scrollToBottom()
      onComplete()
    }
  }
  typeNext()
}

function playFromIndex(msgIndex: number) {
  if (msgIndex >= props.messages.length) {
    isPlaying.value = false
    isCompleted.value = true
    emit('complete')
    return
  }

  const msg = props.messages[msgIndex]
  if (msg.role === 'user') {
    displayedMessages.value.push({ role: 'user', rawContent: msg.content, isTyping: false })
    void scrollToBottom()
    const nextMsg = props.messages[msgIndex + 1]
    if (nextMsg && nextMsg.role === 'assistant') {
      messageTimer = setTimeout(() => {
        showLoadingBeforeAssistant(() => {
          playFromIndex(msgIndex + 1)
        })
      }, 500)
    }
    else {
      messageTimer = setTimeout(() => playFromIndex(msgIndex + 1), 400)
    }
  }
  else {
    typeAssistantMessage(msg.content, () => {
      messageTimer = setTimeout(() => playFromIndex(msgIndex + 1), 600)
    })
  }
}

function play() {
  reset()
  isPlaying.value = true
  void nextTick(() => playFromIndex(0))
}

function replay() {
  play()
}

onMounted(() => {
  if (props.autoStart) {
    play()
  }
})

watch(
  () => props.speed,
  (val) => {
    currentSpeed.value = val
  },
)

watch(
  () => props.messages,
  () => {
    reset()
    if (props.autoStart) {
      play()
    }
  },
  { deep: true },
)

let copyTimer: ReturnType<typeof setTimeout> | null = null

async function copyText(text: string, idx: number) {
  try {
    await navigator.clipboard.writeText(text)
    copiedIndex.value = idx
    if (copyTimer) clearTimeout(copyTimer)
    copyTimer = setTimeout(() => {
      copiedIndex.value = null
    }, 2000)
  }
  catch {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    copiedIndex.value = idx
    if (copyTimer) clearTimeout(copyTimer)
    copyTimer = setTimeout(() => {
      copiedIndex.value = null
    }, 2000)
  }
}

onBeforeUnmount(() => {
  clearAllTimers()
  if (copyTimer) clearTimeout(copyTimer)
})
</script>

<template>
  <div class="chat-replay">
    <div class="chat-header">
      <div class="chat-title">
        <span class="chat-title-icon">💬</span>
        <span>{{ title }}</span>
      </div>
      <div class="chat-controls">
        <button
          class="replay-btn"
          :class="{ playing: isPlaying }"
          :aria-label="isPlaying ? '正在播放' : '播放'"
          @click="replay"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 12a9 9 0 1 0 3-6.7L3 8"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 3v5h5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>{{ isPlaying ? '播放中' : '播放' }}</span>
        </button>
      </div>
    </div>
    <div ref="chatBodyRef" class="chat-body">
      <TransitionGroup name="chat-msg">
        <div
          v-for="(msg, idx) in renderedMessages"
          :key="idx"
          class="chat-message"
          :class="msg.role"
        >
          <div class="msg-avatar">
            <template v-if="msg.role === 'user'">{{ userAvatar }}</template>
            <template v-else-if="msg.role === 'assistant'">{{ assistantAvatar }}</template>
            <template v-else>🤖</template>
          </div>
          <div class="msg-content">
            <div class="msg-role-row">
              <div class="msg-role">
                <template v-if="msg.role === 'user'">User</template>
                <template v-else-if="msg.role === 'assistant'">Assistant</template>
                <template v-else>思考中</template>
              </div>
              <button
                v-if="msg.role === 'user'"
                class="copy-btn"
                :class="{ copied: copiedIndex === idx }"
                :aria-label="copiedIndex === idx ? '已复制' : '复制提示词'"
                @click.stop="copyText(msg.rawContent, idx)"
              >
                <svg v-if="copiedIndex !== idx" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 9h10v10H9V9z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                  <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>{{ copiedIndex === idx ? '已复制' : '复制' }}</span>
              </button>
            </div>
            <template v-if="msg.role === 'loading'">
              <div class="msg-text msg-loading">
                <span class="loading-dot loading-dot-1" />
                <span class="loading-dot loading-dot-2" />
                <span class="loading-dot loading-dot-3" />
              </div>
            </template>
            <template v-else>
              <div class="msg-text chat-markdown">
                <span v-html="msg.html" /><span v-if="msg.isTyping" class="msg-cursor">|</span>
              </div>
            </template>
          </div>
        </div>
      </TransitionGroup>
      <div v-if="!displayedMessages.length && !isPlaying" class="chat-empty">
        点击「播放」按钮开始回放对话
      </div>
    </div>
    <div v-if="isCompleted" class="chat-footer">
      <span class="complete-icon">✓</span>
      对话回放完成
    </div>
  </div>
</template>

<style scoped>
.chat-replay {
  margin: 1.25rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  overflow: hidden;
  background-color: var(--vp-c-bg-soft);
  display: flex;
  flex-direction: column;
  max-height: 700px;
}

.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--vp-c-divider);
  gap: 12px;
  flex-wrap: wrap;
}

.chat-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.chat-title-icon {
  font-size: 16px;
}

.chat-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.replay-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.replay-btn:hover:not(.playing) {
  color: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
}

.replay-btn.playing {
  color: var(--vp-c-text-3);
  cursor: not-allowed;
  opacity: 0.7;
}

.replay-btn svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.chat-body {
  padding: 18px 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  scrollbar-width: thin;
  scrollbar-color: var(--vp-c-divider) transparent;
}

.chat-body::-webkit-scrollbar {
  width: 4px;
}

.chat-body::-webkit-scrollbar-track {
  background: transparent;
}

.chat-body::-webkit-scrollbar-thumb {
  background-color: var(--vp-c-divider);
  border-radius: 2px;
}

.chat-message {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  max-width: 100%;
}

.msg-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
  background: var(--vp-c-bg-mute);
  border: 1px solid var(--vp-c-divider);
}

.chat-message.user .msg-avatar {
  background: var(--vp-c-brand-soft);
  border-color: transparent;
}

.chat-message.loading .msg-avatar {
  background: var(--vp-c-bg-mute);
}

.chat-message.loading .msg-role {
  color: var(--vp-c-text-3);
  font-style: italic;
}

.msg-content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
}

.msg-role-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.msg-role {
  font-size: 11px;
  font-weight: 600;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.chat-message.user .msg-role {
  color: var(--vp-c-brand);
}

.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background-color: transparent;
  color: var(--vp-c-text-3);
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  line-height: 1;
}

.copy-btn:hover {
  color: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-brand-soft);
}

.copy-btn.copied {
  color: #10b981;
  border-color: #10b981;
  background-color: rgba(16, 185, 129, 0.1);
}

.copy-btn svg {
  width: 13px;
  height: 13px;
  flex-shrink: 0;
}

.msg-text {
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 13px;
  line-height: 1.65;
  color: var(--vp-c-text-1);
  word-break: break-word;
  border: 1px solid transparent;
}

.chat-message.user .msg-text {
  background-color: var(--vp-c-brand-soft);
  border-color: transparent;
  border-top-left-radius: 4px;
}

.chat-message.assistant .msg-text {
  background-color: var(--vp-c-bg-mute);
  border-color: var(--vp-c-divider);
  border-top-left-radius: 4px;
}

.chat-message.loading .msg-text {
  background-color: var(--vp-c-bg-mute);
  border-color: var(--vp-c-divider);
  border-top-left-radius: 4px;
}

.msg-loading {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 32px;
  min-width: 60px;
  padding: 10px 16px;
}

.loading-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--vp-c-text-3);
  animation: loading-dot-bounce 1.2s ease-in-out infinite;
}

.loading-dot-1 {
  animation-delay: 0s;
}

.loading-dot-2 {
  animation-delay: 0.15s;
}

.loading-dot-3 {
  animation-delay: 0.3s;
}

@keyframes loading-dot-bounce {
  0%,
  80%,
  100% {
    transform: scale(0.6);
    opacity: 0.4;
  }
  40% {
    transform: scale(1.2);
    opacity: 1;
    background-color: var(--vp-c-brand);
  }
}

.msg-cursor {
  display: inline-block;
  color: var(--vp-c-brand);
  font-weight: 500;
  margin-left: 1px;
  animation: msg-cursor-blink 0.6s step-end infinite;
  font-size: 13px;
  vertical-align: baseline;
}

@keyframes msg-cursor-blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

.chat-empty {
  text-align: center;
  padding: 40px 20px;
  color: var(--vp-c-text-3);
  font-size: 13px;
}

.chat-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 16px;
  background-color: var(--vp-c-bg-alt);
  border-top: 1px solid var(--vp-c-divider);
  font-size: 12px;
  color: #10b981;
  font-weight: 500;
}

.complete-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: rgba(16, 185, 129, 0.15);
  font-size: 10px;
  font-weight: 700;
}

.chat-msg-enter-active {
  transition: all 0.3s ease-out;
}

.chat-msg-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.chat-markdown :deep(h1),
.chat-markdown :deep(h2),
.chat-markdown :deep(h3),
.chat-markdown :deep(h4),
.chat-markdown :deep(h5),
.chat-markdown :deep(h6) {
  margin: 0.6em 0 0.4em;
  font-weight: 600;
  line-height: 1.35;
  color: var(--vp-c-text-1);
}

.chat-markdown :deep(h1) {
  font-size: 1.25em;
  padding-bottom: 0.25em;
  border-bottom: 1px solid var(--vp-c-divider);
}

.chat-markdown :deep(h2) {
  font-size: 1.1em;
  padding-bottom: 0.2em;
  border-bottom: 1px solid var(--vp-c-divider);
}

.chat-markdown :deep(h3) {
  font-size: 1.02em;
}

.chat-markdown :deep(p) {
  margin: 0 0 0.6em;
}

.chat-markdown :deep(p:last-child) {
  margin-bottom: 0;
}

.chat-markdown :deep(ul),
.chat-markdown :deep(ol) {
  margin: 0.4em 0;
  padding-left: 1.4em;
}

.chat-markdown :deep(li) {
  margin: 0.2em 0;
}

.chat-markdown :deep(ul) {
  list-style: disc;
}

.chat-markdown :deep(ol) {
  list-style: decimal;
}

.chat-markdown :deep(strong) {
  color: var(--vp-c-text-1);
  font-weight: 600;
}

.chat-markdown :deep(em) {
  font-style: italic;
}

.chat-markdown :deep(a) {
  color: var(--vp-c-brand);
  text-decoration: none;
  border-bottom: 1px dashed var(--vp-c-brand-3);
  transition: border-color 0.2s;
}

.chat-markdown :deep(a:hover) {
  border-bottom-style: solid;
}

.chat-markdown :deep(code) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  font-size: 0.9em;
  padding: 0.1em 0.4em;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 5px;
  color: var(--vp-c-text-code);
  word-break: break-word;
}

.chat-markdown :deep(pre) {
  margin: 0.6em 0;
  padding: 10px 12px;
  background: var(--vp-code-block-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow-x: auto;
  font-size: 0.88em;
  line-height: 1.6;
}

.chat-markdown :deep(pre code) {
  padding: 0;
  background: transparent;
  border: none;
  font-size: inherit;
  color: inherit;
  border-radius: 0;
}

.chat-markdown :deep(blockquote) {
  margin: 0.6em 0;
  padding: 0.4em 0.8em;
  border-left: 3px solid var(--vp-c-brand-3);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  border-radius: 0 6px 6px 0;
}

.chat-markdown :deep(blockquote p) {
  margin: 0;
}

.chat-markdown :deep(table) {
  margin: 0.6em 0;
  border-collapse: collapse;
  width: 100%;
  font-size: 0.92em;
  display: block;
  overflow-x: auto;
}

.chat-markdown :deep(th),
.chat-markdown :deep(td) {
  border: 1px solid var(--vp-c-divider);
  padding: 6px 10px;
  text-align: left;
}

.chat-markdown :deep(th) {
  background: var(--vp-c-bg-soft);
  font-weight: 600;
}

.chat-markdown :deep(tr:nth-child(even) td) {
  background: var(--vp-c-bg-soft);
}

.chat-markdown :deep(hr) {
  margin: 0.8em 0;
  border: none;
  border-top: 1px solid var(--vp-c-divider);
}

.chat-markdown :deep(input[type="checkbox"]) {
  margin-right: 0.4em;
  transform: translateY(1px);
}
</style>
