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
  smoothScroll: true,
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '面试', link: '/interview/' },
      { text: '开发经验', link: '/development/' },
      { text: '生活', link: '/life/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/no-chili' },
    ],
    sidebar: {
      '/interview/': [
        {
          text: 'CSS',
          collapsible: true,
          items:[
            { text: '居中', link: '/interview/center' },
            { text: '居中', link: '/interview/center' },
          ]
        },
        {
          text: 'JavaScript',
          collapsible: true,
          items:[
            { text: '运算符', link: '/JavaScript/ES6中的运算符' },
          ]
        },
        {
          text: 'Vue',
          collapsible:true,
          items:[
            { text: '居中', link: '/interview/center' },
          ]
        },
        {
          text: 'React',
          collapsible:true,
          items:[
            { text: '居中', link: '/interview/center' },
          ]
        },
        {
          text: '浏览器',
          collapsible:true,
          items:[
            { text: '居中', link: '/interview/center' },
          ]
        },
        {
          text: 'TypeScript',
          collapsible:true,
          items:[
            { text: '居中', link: '/interview/center' },
          ]
        }
      ],
      '/development/':[
        {
          text:'开发',
          items:[
            { text: '验证', link: '/development/verify' },
            { text: '原子化CSS', link: '/development/unocss' },
            { text: '封装vue组件', link: '/development/wrap' },
          ]
        }
      ]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
