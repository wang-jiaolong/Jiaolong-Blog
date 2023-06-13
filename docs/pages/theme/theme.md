---
layout: doc
---

# About this theme

>  本主题基于[VitePress](https://vitepress.dev/)默认主题修改

## 安装 <Badge type="info" text="Doing" />

详细可参考官方文档：https://vitepress.dev/guide/getting-started


```sh
mkdir vitepress
cd vitepress
npm install -D vitepress
npx vitepress init
```

运行：

```sh
npm run docs:dev
```

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },

]
</script>

<VPTeamMembers size="medium" :members="members" />

<VPHomeSponsors />

## 目录自动加载

https://github.com/vuejs/vitepress/issues/1737