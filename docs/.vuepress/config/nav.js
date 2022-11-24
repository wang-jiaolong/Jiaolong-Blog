export default [
    { text: '首页', link: '/' },
    {
        text: 'Wiki',
        link: '/wikis/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    },
    // {
    //   text: 'Books',
    //   items: [
    //     { text: '《计算机组成与设计》', link: '/pages/0bb29a/' },
    //     { text: '《程序员的自我修养》', link: '/pages/1bb0d6/' }
    //   ],
    // },
    {
      text: '索引',
      link: '/archives/',
      items: [
        {
          text: '',
          items: [
            { text: '归档', link: '/archives/' },
          ],
        },
        {
          text: '',
          items: [
            { text: '分类', link: '/categories/' },
          ],
        },
        {
          text: '',
          items: [
            { text: '标签', link: '/tags/' },
          ],
        }
      ],
    },
    {
      text: '导航',
      link: '/favorite/website/',
      items: [
        {
          text: '',
          items: [
            { text: '网站', link: '/favorite/website/' },
          ],
        },
        {
          text: '',
          items: [
            { text: '软件', link: '/favorite/software/' },
          ],
        },
        {
          text: '',
          items: [
            { text: '博客', link: '/favorite/blogs/' },
          ],
        },
      ],
    },
    { text: '关于', link: '/about/' },
  ]