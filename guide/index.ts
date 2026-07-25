import type { DefaultTheme } from 'vitepress'

export function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '简介',
      link: '/guide/index',
    },
    {
      text: '快速上手',
      collapsed: false,
      items: [
        { text: '准备工作', link: '/guide/preparation' },
        { text: '创建项目', link: '/guide/create-project' },
        { text: '创建组件', link: '/guide/create-widget' },
      ],
    },
    {
      text: '核心概念',
      collapsed: false,
      items: [
        { text: '组件包', link: '/guide/widget-package' },
        { text: '组件', link: '/guide/widget' },
        { text: '组件数据存储', link: '/guide/widget-data' },
        { text: 'API', link: '/guide/api' },
        { text: '广播事件', link: '/guide/broadcast' },
        { text: '国际化', link: '/guide/i18n' },
      ],
    },
    {
      text: '主题',
      collapsed: false,
      items: [
        { text: '组件主题', link: '/guide/theme' },
      ],
    },
    {
      text: 'Skills',
      collapsed: false,
      items: [
        { text: '概览', link: '/guide/skills' },
        { text: '创建项目（AI）', link: '/guide/skills/create-project' },
        { text: '创建组件（AI）', link: '/guide/skills/create-widget' },
      ],
    },
    {
      text: '发布组件',
      collapsed: false,
      items: [
        { text: '准备工作', link: '/guide/publish/preparation' },
        { text: '编译离线包', link: '/guide/publish/build' },
        { text: '发布', link: '/guide/publish/release' },
      ],
    },
    {
      text: '工具库',
      collapsed: false,
      items: [
        { text: '@widget-js/vue3', link: 'https://widgetjs.cn/vue3' },
        { text: '@widget-js/cli', link: '/guide/wait' },
      ],
    },
  ]
}

export function sidebarGuideEn(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      link: '/en/guide/index',
    },
    {
      text: 'Getting Started',
      collapsed: false,
      items: [
        { text: 'Preparation', link: '/en/guide/preparation' },
        { text: 'Create Project', link: '/en/guide/create-project' },
        { text: 'Create Widget', link: '/en/guide/create-widget' },
      ],
    },
    {
      text: 'Core Concepts',
      collapsed: false,
      items: [
        { text: 'Widget Package', link: '/en/guide/widget-package' },
        { text: 'Widget', link: '/en/guide/widget' },
        { text: 'Widget Data Storage', link: '/en/guide/widget-data' },
        { text: 'API', link: '/en/guide/api' },
        { text: 'Broadcast Events', link: '/en/guide/broadcast' },
        { text: 'Internationalization', link: '/en/guide/i18n' },
      ],
    },
    {
      text: 'Theme',
      collapsed: false,
      items: [
        { text: 'Widget Theme', link: '/en/guide/theme' },
      ],
    },
    {
      text: 'Skills',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/en/guide/skills' },
        { text: 'Create Project (AI)', link: '/en/guide/skills/create-project' },
        { text: 'Create Widget (AI)', link: '/en/guide/skills/create-widget' },
      ],
    },
    {
      text: 'Publishing',
      collapsed: false,
      items: [
        { text: 'Preparation', link: '/en/guide/publish/preparation' },
        { text: 'Build Offline Package', link: '/en/guide/publish/build' },
        { text: 'Release', link: '/en/guide/publish/release' },
      ],
    },
    {
      text: 'Tools',
      collapsed: false,
      items: [
        { text: '@widget-js/vue3', link: 'https://widgetjs.cn/vue3' },
        { text: '@widget-js/cli', link: '/en/guide/wait' },
      ],
    },
  ]
}
