import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'
import { navbar } from './navbar'
import { weekly } from './js/weekly-auto'
import { posts,blogs } from './js/posts-auto'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jiaolong 's Blog",
  description: "A VitePress Site",
  cleanUrls: true,
  lang: 'zh-cn',
  themeConfig: {
    outline: [2, 3, 4, 5],
    weekly:weekly,
    posts:posts,
    blogs:blogs,
    // logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav:navbar,
    sidebar: sidebar,
    footer: {
      // message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2023 Jiaolong Wang'
    },
    markdown: {
      toc: { level: [1, 2, 3] },
      lineNumbers: true,
      badge: true
    }
  }
})
