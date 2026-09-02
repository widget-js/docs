import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import BilibiliVideo from './components/BilibiliVideo.vue'
import ChatReplay from './components/ChatReplay.vue'
import DocImage from './components/DocImage.vue'
import LogoTab from './components/LogoTab.vue'
import PromptTypewriter from './components/PromptTypewriter.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('BilibiliVideo', BilibiliVideo)
    app.component('LogoTab', LogoTab)
    app.component('PromptTypewriter', PromptTypewriter)
    app.component('ChatReplay', ChatReplay)
    app.component('DocImage', DocImage)
  },
} satisfies Theme
