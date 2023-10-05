---
# https://vitepress.dev/reference/default-theme-home-page
layout: doc
aside: false
---

<script setup>

import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()


const apps = [
  {
    title: 'Notion',
    desc: 'All In One Workspace',
    icon:'./icon/apps/notion.png',
    link:'https://www.notion.so/product?fredir=1'
  },
  {
    title: 'Flomo',
    desc: '持续不断记录，意义自然浮现',
    icon:'./icon/apps/flomo.png',
    link:'https://www.notion.so/product?fredir=1'
  }
]




</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Inbox
    </template>
    <template #lead>
      收集箱
    </template>
  </VPTeamPageTitle>
</VPTeamPage>


### 个人网站

> 一些有趣的人和他的个人网站

- [Linmi - 探索未知，沉淀新知，迭代认知。](https://linmi.cc/) —— Notion中文社区负责人
- [翁天信 · Dandy Weng](https://www.dandyweng.com/) —— “你好，我是翁天信，一个自学者”
- [王禹效 Legolas](https://www.legolas.me/) —— 心光日记开发者



<br>
<br>

### 技术博客

> 一些时常会拜读的技术博客

- [肘子的Swift记事本](https://www.fatbobman.com/) —— Swift技术博客


<br>
<br>

### 值得一读

> 一些值得一读的文章

[Go Deeper, Not Wider](https://www.raptitude.com/2017/12/go-deeper-not-wider/) —— 走得更深，而不是更宽


### 笔记

<AppList :items ="apps" />
