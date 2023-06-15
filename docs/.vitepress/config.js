import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'
// import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jiaolong 's Blog",
  description: "A VitePress Site",
  cleanUrls:true,
  lang: 'zh-cn',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Weekly', link: '/pages/weekly/2023/01' },
      { text: 'Projects', link: '/project' },
      { text: 'Wiki', link: '/wiki' },
      { text: 'Excerpt', link: '/excerpt' },
      { text: 'About', link: '/about' },


    ],

    sidebar: sidebar,

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
    
  footer: {
    // message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
    copyright: 'Copyright © 2023 Jiaolong Wang'
  },
  markdown: {
    badge: true
  }
  },
  vite: {
    // plugins: [
    //     // add plugin
    //     AutoSidebar({ 
    //       path:"/docs/pages"
    //         // You can also set options to adjust sidebar data
    //         // see option document below
    //     })
    // ]
},
})
