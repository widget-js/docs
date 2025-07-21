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
      text: '核心概念（编写中）',
      collapsed: false,
      items: [
        { text: '组件包', link: '/guide/widget-package' },
        { text: '组件', link: '/guide/widget' },
        { text: '组件数据存储', link: '/guide/widget-data' },
        { text: '国际化', link: '/guide/wait' },
        { text: '广播事件', link: '/guide/wait' },
        { text: 'API', link: '/guide/wait' },
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
        { text: '编译', link: '/guide/publish/build' },
        { text: '发布', link: '/guide/publish/release' },
        // { text: '通过GitHub发布', link: '/guide/publish/github' },
        // { text: '通过服务器发布', link: '/guide/publish/self-host' },
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
    // {
    //     text: 'Customization',
    //     collapsed: false,
    //     items: [
    //         {text: 'Using a Custom Theme', link: '/guide/custom-theme'},
    //         {
    //             text: 'Extending the Default Theme',
    //             link: '/guide/extending-default-theme'
    //         },
    //         {text: 'Build-Time Data Loading', link: '/guide/data-loading'},
    //         {text: 'SSR Compatibility', link: '/guide/ssr-compat'},
    //         {text: 'Connecting to a CMS', link: '/guide/cms'}
    //     ]
    // },
    // {
    //     text: 'Experimental',
    //     collapsed: false,
    //     items: [
    //         {
    //             text: 'MPA Mode',
    //             link: '/guide/mpa-mode'
    //         }
    //     ]
    // },
    // {
    //   text: 'Migrations',
    //   collapsed: false,
    //   items: [
    //     {
    //       text: 'Migration from VuePress',
    //       link: '/guide/migration-from-vuepress'
    //     },
    //     {
    //       text: 'Migration from VitePress 0.x',
    //       link: '/guide/migration-from-vitepress-0'
    //     }
    //   ]
    // },
    // {
    //     text: 'Config & API Reference',
    //     link: '/reference/site-config'
    // }
  ]
}
