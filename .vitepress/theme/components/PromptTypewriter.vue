<script setup lang="ts">
import { computed, h, onMounted, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    text: string
    title?: string
    logo?: string
    speed?: number
    loop?: boolean
    loopDelay?: number
    autoReplay?: boolean
    highlights?: (string | RegExp)[]
  }>(),
  {
    title: 'Prompt',
    logo: '/assets/logo/trae.svg',
    speed: 50,
    loop: false,
    loopDelay: 3000,
    autoReplay: true,
  },
)

const displayedText = ref('')
const isTyping = ref(false)
const copied = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null
let loopTimer: ReturnType<typeof setTimeout> | null = null

function clearTimers() {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
  if (loopTimer) {
    clearTimeout(loopTimer)
    loopTimer = null
  }
}

function startTyping() {
  clearTimers()
  displayedText.value = ''
  isTyping.value = true
  let index = 0

  const typeNext = () => {
    if (index < props.text.length) {
      displayedText.value += props.text[index]
      index++
      timer = setTimeout(typeNext, props.speed)
    }
    else {
      isTyping.value = false
      if (props.autoReplay) {
        loopTimer = setTimeout(() => {
          startTyping()
        }, 10000)
      }
      else if (props.loop) {
        loopTimer = setTimeout(() => {
          startTyping()
        }, props.loopDelay)
      }
    }
  }

  typeNext()
}

async function copyText() {
  try {
    await navigator.clipboard.writeText(props.text)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
  catch (err) {
    const textarea = document.createElement('textarea')
    textarea.value = props.text
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
}

function escapeHtml(str: string): string {
  const div = document.createElement('div')
  div.textContent = str
  return div.innerHTML
}

const highlightedText = computed(() => {
  if (!displayedText.value) { return '' }
  if (!props.highlights) { return displayedText.value }

  const patterns: RegExp[] = props.highlights.map((p) => {
    if (p instanceof RegExp) { return new RegExp(p.source, p.flags.includes('g') ? p.flags : `${p.flags}g`) }
    return new RegExp(p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')
  })

  interface Segment { text: string, highlighted: boolean }
  const segments: Segment[] = [{ text: displayedText.value, highlighted: false }]

  for (const pattern of patterns) {
    const newSegments: Segment[] = []
    for (const seg of segments) {
      if (seg.highlighted) {
        newSegments.push(seg)
        continue
      }
      let lastIndex = 0
      let match: RegExpExecArray | null
      pattern.lastIndex = 0
      while ((match = pattern.exec(seg.text)) !== null) {
        if (match.index > lastIndex) {
          newSegments.push({ text: seg.text.slice(lastIndex, match.index), highlighted: false })
        }
        newSegments.push({ text: match[0], highlighted: true })
        lastIndex = pattern.lastIndex
        if (match.index === pattern.lastIndex) { pattern.lastIndex++ }
      }
      if (lastIndex < seg.text.length) {
        newSegments.push({ text: seg.text.slice(lastIndex), highlighted: false })
      }
    }
    segments.length = 0
    segments.push(...newSegments)
  }

  return segments
    .map(s =>
      s.highlighted
        ? `<mark class="typewriter-highlight">${escapeHtml(s.text)}</mark>`
        : escapeHtml(s.text),
    )
    .join('')
})

onMounted(() => {
  startTyping()
})

watch(
  () => props.text,
  () => {
    startTyping()
  },
)
</script>

<template>
  <div class="prompt-typewriter">
    <div class="typewriter-header">
      <div class="typewriter-logo">
        <img :src="logo" alt="AI Logo">
      </div>
      <div class="typewriter-title">
        {{ title }}
      </div>
      <button
        class="typewriter-copy-btn"
        :class="{ copied }"
        :aria-label="copied ? 'Copied!' : 'Copy prompt'"
        @click="copyText"
      >
        <svg v-if="!copied" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 9h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg v-else viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 6 9 17l-5-5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>{{ copied ? 'Copied!' : 'Copy' }}</span>
      </button>
    </div>
    <div class="typewriter-body">
      <pre class="typewriter-text"><span v-html="highlightedText" /><span class="typewriter-cursor" :class="{ typing: isTyping }">|</span></pre>
    </div>
  </div>
</template>

<style scoped>
.prompt-typewriter {
  margin: 1.25rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}

.typewriter-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background-color: var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--vp-c-divider);
}

.typewriter-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--vp-c-bg-mute);
  padding: 4px;
}

.typewriter-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.typewriter-title {
  flex: 1;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
}

.typewriter-copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.typewriter-copy-btn:hover {
  color: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
}

.typewriter-copy-btn.copied {
  color: #10b981;
  border-color: #10b981;
  background-color: rgba(16, 185, 129, 0.1);
}

.typewriter-copy-btn svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.typewriter-body {
  padding: 18px 20px;
  background-color: var(--vp-code-block-bg);
  overflow-x: auto;
}

.typewriter-text {
  margin: 0;
  padding: 0;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.7;
  color: var(--vp-c-text-1);
  white-space: pre-wrap;
  word-break: break-word;
  background: transparent;
}

.typewriter-text :deep(mark.typewriter-highlight) {
  all: unset;
  display: inline-flex;
  align-items: center;
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  padding: 1px 8px;
  border-radius: 9999px;
  border: 1px solid var(--vp-c-brand-soft);
  font-weight: 600;
  font-size: 0.92em;
  line-height: 1.5;
  margin: 0 1px;
  vertical-align: middle;
}

.typewriter-cursor {
  display: inline-block;
  color: var(--vp-c-brand);
  font-weight: 500;
  margin-left: 1px;
  animation: cursor-blink 1s step-end infinite;
}

.typewriter-cursor.typing {
  animation-duration: 0.6s;
}

@keyframes cursor-blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}
</style>
