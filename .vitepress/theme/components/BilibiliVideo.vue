<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  bvid: string
  page?: number
  title?: string
  width?: string
  height?: string
  autoplay?: boolean
  danmaku?: boolean
  highQuality?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  page: 1,
  title: 'Bilibili 视频',
  width: '100%',
  height: '100%',
  autoplay: false,
  danmaku: false,
  highQuality: true,
})

const embedUrl = computed(() => {
  const params = new URLSearchParams()
  params.set('bvid', props.bvid)
  params.set('page', String(props.page))
  if (props.autoplay) { params.set('autoplay', '1') }
  params.set('danmaku', props.danmaku ? '1' : '0')
  params.set('high_quality', props.highQuality ? '1' : '0')
  return `https://player.bilibili.com/player.html?${params.toString()}`
})

const videoUrl = computed(() => {
  return `https://www.bilibili.com/video/${props.bvid}`
})
</script>

<template>
  <div class="bilibili-video-wrapper">
    <div class="bilibili-video-container">
      <iframe
        :src="embedUrl"
        :title="title"
        frameborder="0"
        allowfullscreen="allowfullscreen"
        allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
        sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups"
      />
    </div>
    <p class="bilibili-video-title">
      📺 <a :href="videoUrl" target="_blank" rel="noopener noreferrer">{{ title }}</a>
    </p>
  </div>
</template>

<style scoped>
.bilibili-video-wrapper {
  margin: 1.5rem 0;
}

.bilibili-video-container {
  position: relative;
  width: 100%;
  max-width: 720px;
  padding-top: 56.25%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
  background: #000;
}

.bilibili-video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.bilibili-video-title {
  text-align: center;
  margin-top: 0.75rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.bilibili-video-title a {
  color: var(--vp-c-brand);
  text-decoration: none;
  transition: color 0.2s;
}

.bilibili-video-title a:hover {
  color: var(--vp-c-brand-hover);
  text-decoration: underline;
}
</style>
