import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'
import { navbar } from './navbar'
import { blogs,tags,years } from './js/posts-auto'
import AutoSidebar from "@iminu/vitepress-plugin-auto-sidebar";

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
    years:years,
    // logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav:navbar,
    // sidebar: sidebar,
    footer: {
      // message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2023 Jiaolong Wang'
    },
    markdown: {
      toc: { level: [1, 2, 3] },
      lineNumbers: true,
      badge: true
    }
  },
  vite: {
    plugins: [
      AutoSidebar({
        /**
         * 当插件将目录结构转换为 sidebar 配置后触发，
         * 方便我们去操作 sidebar，比如将目录排序、修改目录名称等
         */
        // sidebarResolved(value) {
        //   // do sort
        //   value["/dir2/"][0].items?.sort((a, b) => a.text - b.text);
        //   // rename
        //   value["/dir2/"][0].text = "sorted";
        // },
        // 忽略一些文件
        ignores: ["index.md"],
        // 指定我们要自动构建的文档目录，默认是 .vitepress 目录
        // docs: path.resolve(process.cwd(), ""),
        /**
         * 指定 .vitepress 目录，默认会通过 glob 匹配到，
         * 如果页面有多个 .vitepress 需要手动配置
         */
        // root: path.resolve(process.cwd(), "docs"),
      })
    ]
  }
})
