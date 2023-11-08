import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'
import { navbar } from './navbar'
import { blogs,tags } from './js/posts-auto'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jiaolong 's Blog",
  description: "Welcome",
  cleanUrls: true,
  lang: 'zh-cn',
  transformPageData(pageData) {
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'meta',
      {
        name: 'og:title',
        content:
          pageData.frontmatter.layout === 'home'
            ? `Jiaolong 's Blog`
            : `${pageData.title} | Jiaolong 's Blog`
      }
    ],[
      'meta',
      {
        name: 'og:image',
        content:
          pageData.frontmatter.image === ''
            ? 'https://www.jiaolong.xyz/logo.png'
            : pageData.frontmatter.image
      }])
  },
  banner:'/logo.png',
  themeConfig: {
    outline: [2, 3, 4, 5],
    blogs:blogs,
    tags:tags,
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
