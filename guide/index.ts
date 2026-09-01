import type { DefaultTheme } from 'vitepress'

export function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '快速上手',
      collapsed: false,
      items: [
        { text: '准备工作', link: '/guide' },
        { text: '创建第一个组件', link: '/guide/create-project' },
        { text: '生成离线包', link: '/guide/build' },
        { text: '发布组件', link: '/guide/publish' },
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
        { text: '发布前准备工作', link: '/guide/publish/preparation' },
        { text: '通过GitHub发布', link: '/guide/publish/github' },
        { text: '通过服务器发布', link: '/guide/publish/self-host' },
      ],
    },
    {
      text: '工具库',
      collapsed: false,
      items: [
        { text: '@widget-js/react', link: 'https://widget-js.github.io/react' },
        { text: '@widget-js/cli', link: '/guide/wait' },
      ],
    },
  ]
}
