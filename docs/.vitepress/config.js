import { defineConfig } from 'vitepress'

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
      { text: 'Weekly', link: '/weekly/2023/01' }
    ],

    sidebar: {
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // },
      '/weekly/': [
        {
          text: '2023',
          items: [   
            { text: 'No.01 | 就这样，从这周开始写周记', link: '/weekly/2023/01' },
            { text: 'No.02 | 克服不了的完美主义', link: '/weekly/2023/02' },
            { text: 'No.03 | 可编辑的数据才有价值', link: '/weekly/2023/03' },
            { text: 'No.04 | 想法远大于技术', link: '/weekly/2023/04' },
            { text: 'No.05 | 对AI有了新思考', link: '/weekly/2023/05' },
            { text: 'No.06 | 迈出Web端的第一步', link: '/weekly/2023/06' },

          ]
        }
      ],
      '/theme/': [
        {
          text: 'Theme',
          items: [
            { text: 'About', link: '/theme/theme' },
            { text: 'Examples', link: '/theme/markdown-examples' }

          ]
        }
      ],

    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
    
  footer: {
    // message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
    copyright: 'Copyright © 2023 Jiaolong Wang'
  }
  }
})
