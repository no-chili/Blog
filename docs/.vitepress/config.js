import { defineConfig } from 'vitepress'
export default defineConfig({
  lang: 'zh-CN',
  title: 'no-chili的经验总结',
  description: '平时记录一些开发经验和坑',
  appearance: true,
  base: '/',
  head: [
    ['link', { rel: 'preconnect', href: 'https://github.com/no-chili', crossorigin: '' }]
  ],
  ignoreDeadLinks: true,
  lastUpdated: true,
  markdown: {
    theme: 'github-dark',
    lineNumbers: true
  },
  smoothScroll: true,
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '知识点', link: '/knowledge/ES6中的运算符' },
      { text: '开发经验', link: '/development/unocss' },
      { text: '坑', link: '/pit/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/no-chili' },
    ],
    sidebar: {
      '/knowledge/': [
        {
          text: '知识点',
          items: [
            {
              text: '运算符',
              link: '/knowledge/ES6中的运算符'
            },
            {
              text: 'getComputedStyle',
              link: '/knowledge/getComputedStyle'
            }
          ]
        }
      ],
      '/development/': [
        {
          items: [
            { text: '原子化CSS', link: '/development/unocss' },
          ]
        }
      ],
      '/pit/': [
        {
          text: '坑',
          items: []
        }
      ],
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
