import { createRequire } from 'node:module'
import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { sidebarGuide } from '../guide'
import { sidebarApi } from '../api'

const require = createRequire(import.meta.url)
const pkg = require('../package.json')

export default defineConfig({
  lang: 'en-US',
  title: '桌面组件',
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
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
      '/api/': sidebarApi(),
      '/reference/': sidebarReference(),
    },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/widget-js/widgets' },
      { icon: 'discord', link: 'https://discord.com/invite/vwSAaRR8cT' },
    ],
    footer: {
      message: '<a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">闽ICP备2021010730号-3</a>',
      copyright: 'Copyright © 2023-present Neo Fu',
    },
    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '8J64VVRP8K',
    //     apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //     indexName: 'vitepress'
    //   }
    // },
  },
})

function nav(): any[] {
  return [
    { text: 'Guide（Beta）', link: '/guide/index', activeMatch: '/guide/' },
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

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Reference',
      items: [
        { text: 'Site Config', link: '/reference/site-config' },
        { text: 'Frontmatter Config', link: '/reference/frontmatter-config' },
        { text: 'Runtime API', link: '/reference/runtime-api' },
        { text: 'CLI', link: '/reference/cli' },
        {
          text: 'Default Theme',
          items: [
            {
              text: 'Overview',
              link: '/reference/default-theme-config',
            },
            {
              text: 'Nav',
              link: '/reference/default-theme-nav',
            },
            {
              text: 'Sidebar',
              link: '/reference/default-theme-sidebar',
            },
            {
              text: 'Home Page',
              link: '/reference/default-theme-home-page',
            },
            {
              text: 'Footer',
              link: '/reference/default-theme-footer',
            },
            {
              text: 'Layout',
              link: '/reference/default-theme-layout',
            },
            {
              text: 'Badge',
              link: '/reference/default-theme-badge',
            },
            {
              text: 'Team Page',
              link: '/reference/default-theme-team-page',
            },
            {
              text: 'Prev / Next Links',
              link: '/reference/default-theme-prev-next-links',
            },
            {
              text: 'Edit Link',
              link: '/reference/default-theme-edit-link',
            },
            {
              text: 'Last Updated Timestamp',
              link: '/reference/default-theme-last-updated',
            },
            {
              text: 'Search',
              link: '/reference/default-theme-search',
            },
            {
              text: 'Carbon Ads',
              link: '/reference/default-theme-carbon-ads',
            },
          ],
        },
      ],
    },
  ]
}
