import {defineConfig} from 'vitepress'
export default defineConfig({
  lang: 'zh-CN',
  title: 'no-chili',
  description: '平时记录一些开发和生活',
  appearance: true,
  base: '/',
  head: [
    ['link', { rel: 'preconnect', href: 'https://github.com/no-chili', crossorigin: '' }]
  ],
  ignoreDeadLinks: true,
  lastUpdated: true,
  markdown: {
    theme:'github-dark',
    lineNumbers: true
  },
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '面试', link: '/interview/' },
      { text: '开发经验', link: '/development/' },
      { text: '生活', link: '/life/' },
    ],
    sidebar: {
      '/interview/': [
        {
          text: 'CSS',
          collapsable: false,
          items:[
            { text: '居中', link: '/interview/center' },
          ]
        }
      ],
      '/development/': [
        {
          text: '表单验证',
          collapsable: false,
          items:[
            { text: '验证', link: '/development/center' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/no-chili' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
