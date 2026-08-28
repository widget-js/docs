import type { DefaultTheme } from 'vitepress'
import { createRequire } from 'node:module'
import { defineConfig } from 'vitepress'
import { sidebarApi } from '../api'
import { sidebarGuide, sidebarSkills } from '../guide'

const require = createRequire(import.meta.url)
const pkg = require('../package.json')

export default defineConfig({
  title: 'WidgetJS',
  description: 'Capable and ergonomic widgets.',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#337ffc' }],
    ['script', {}, `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?57290c33e0292e6bc629c968f95465b6";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();`],
  ],

  themeConfig: {
    logo: '/favicon.ico',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/widget-js/widgets' },
      { icon: 'discord', link: 'https://discord.com/invite/vwSAaRR8cT' },
    ],
    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '8J64VVRP8K',
    //     apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //     indexName: 'vitepress'
    //   }
    // },
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '桌面组件',
      description: '强大且符合人体工程学的小部件。',
      themeConfig: {
        nav: navZh(),
        sidebar: {
          '/skills': sidebarSkills(),
          '/guide/': sidebarGuide(),
          '/api/': sidebarApi(),
          '/reference/': sidebarReferenceZh(),
        },
        editLink: {
          pattern: 'https://github.com/widget-js/widgets/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页',
        },
        footer: {
          message: '<a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">闽ICP备2021010730号-3</a>',
          copyright: '版权所有 © 2023-present Neo Fu',
        },
        docFooter: {
          prev: '上一页',
          next: '下一页',
        },
        outline: {
          label: '页面导航',
        },
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium',
          },
        },
        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
      },
    },
  },
})

function navZh(): any[] {
  return [
    { text: '开发指南', link: '/guide/index', activeMatch: '/guide/' },
    { text: 'Skills', link: '/skills', activeMatch: '/skills' },
    { text: 'API', link: '/api/AppApi', activeMatch: '/api/' },
    {
      text: pkg.version,
      items: [
        // {
        //   text: 'Changelog',
        //   link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
        // },
        // {
        //   text: 'Contributing',
        //   link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
        // }
      ],
    },
  ]
}

function sidebarReferenceZh(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '参考',
      items: [
        { text: '站点配置', link: '/reference/site-config' },
        { text: 'Frontmatter 配置', link: '/reference/frontmatter-config' },
        { text: '运行时 API', link: '/reference/runtime-api' },
        { text: 'CLI', link: '/reference/cli' },
        {
          text: '默认主题',
          items: [
            { text: '概览', link: '/reference/default-theme-config' },
            { text: '导航栏', link: '/reference/default-theme-nav' },
            { text: '侧边栏', link: '/reference/default-theme-sidebar' },
            { text: '主页', link: '/reference/default-theme-home-page' },
            { text: '页脚', link: '/reference/default-theme-footer' },
            { text: '布局', link: '/reference/default-theme-layout' },
            { text: '徽章', link: '/reference/default-theme-badge' },
            { text: '团队页', link: '/reference/default-theme-team-page' },
            { text: '上一页 / 下一页链接', link: '/reference/default-theme-prev-next-links' },
            { text: '编辑链接', link: '/reference/default-theme-edit-link' },
            { text: '最后更新时间戳', link: '/reference/default-theme-last-updated' },
            { text: '搜索', link: '/reference/default-theme-search' },
            { text: 'Carbon Ads', link: '/reference/default-theme-carbon-ads' },
          ],
        },
      ],
    },
  ]
}
