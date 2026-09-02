<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    src: string
    alt?: string
    trim?: number
    caption?: string
    shadow?: boolean
    rounded?: number | string
    zoomable?: boolean
  }>(),
  {
    alt: '',
    trim: 5,
    shadow: true,
    rounded: 10,
    zoomable: true,
  },
)

const wrapperStyle = computed(() => ({
  borderRadius: typeof props.rounded === 'number' ? `${props.rounded}px` : props.rounded,
  boxShadow: props.shadow ? '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06)' : 'none',
}))

const imgStyle = computed(() => ({
  width: `calc(100% + ${props.trim * 2}px)`,
  maxWidth: 'none',
  margin: `${-props.trim}px`,
  display: 'block',
}))

const isZoomed = ref(false)

function openZoom() {
  if (!props.zoomable) return
  isZoomed.value = true
  document.body.style.overflow = 'hidden'
}

function closeZoom() {
  isZoomed.value = false
  document.body.style.overflow = ''
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeZoom()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <figure class="doc-image">
    <div
      class="doc-image-wrapper"
      :style="wrapperStyle"
      @click="openZoom"
    >
      <img :src="src" :alt="alt" :style="imgStyle">
    </div>
    <figcaption v-if="caption" class="doc-image-caption">
      {{ caption }}
    </figcaption>
  </figure>

  <Teleport to="body">
    <Transition name="doc-image-fade">
      <div v-if="isZoomed" class="doc-image-overlay" @click="closeZoom">
        <img :src="src" :alt="alt" class="doc-image-zoomed" @click.stop>
        <button class="doc-image-close" @click="closeZoom" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 6 6 18M6 6l12 12"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.doc-image {
  margin: 1.25rem 0;
}

.doc-image-wrapper {
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
  cursor: zoom-in;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.doc-image-wrapper:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.06) !important;
}

.doc-image-caption {
  margin-top: 0.75rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  text-align: center;
  font-style: italic;
}

.doc-image-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  cursor: zoom-out;
  backdrop-filter: blur(4px);
}

.doc-image-zoomed {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  cursor: default;
}

.doc-image-close {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
}

.doc-image-close:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.doc-image-close svg {
  width: 22px;
  height: 22px;
}

.doc-image-fade-enter-active,
.doc-image-fade-leave-active {
  transition: opacity 0.2s ease;
}

.doc-image-fade-enter-from,
.doc-image-fade-leave-to {
  opacity: 0;
}
</style>
