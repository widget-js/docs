import type { DefaultTheme } from 'vitepress'

export function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '简介',
      link: '/guide',
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
