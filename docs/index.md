---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: "无限进步"
  text: "Jiaolong 's Blog"
  tagline: 理想主义的少年永远不会被现实招安
  # image:
  #   src: /logo.png
  #   alt: VitePress
  actions:
    # - theme: brand
    #   text: 我的周记
    #   link: /pages/weekly/2023/01
    # - theme: brand
    #   text: 项目
    #   link: /project
    # - theme: alt
    #   text: Wiki
    #   link: /wiki
features:

  - title: 技术博客
    details: 一些学习记录
    icon: 🧑🏻‍💻
    linkText: 随便看看
    link: /blogs

  # - title: Wiki
  #   details: 到底需要记住多少命令行呢？
  #   icon: 📚
  #   linkText: 随便看看
  #   link: /wiki

  - title: 有关于我
    details: About me
    icon: 👀
    linkText: 随便看看
    link: /about
    
---


<script setup>

import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()

</script>

<!-- <ArchiveList title="Product" :items ="theme.posts" style="width:60%;margin:auto" /> -->