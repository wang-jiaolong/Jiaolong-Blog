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
  # actions:
    # - theme: brand
    #   text: 归档
    #   link: /pages/weekly/2023/01
    # - theme: brand
    #   text: 有关于我
    #   link: /project
    # - theme: alt
    #   text: Wiki
    #   link: /wiki
features:

  - title: 📚 Archive
    # details: 一些学习记录
    # icon: 🧑🏻‍💻
    linkText: 
    link: /archive

  - title: 📃 Reading List
    # details: 到底需要记住多少命令行呢？
    # icon: 
    linkText: 
    link: /pages

  - title: 👀 About me
    # details: About me
    # icon: 👀
    linkText: 
    link: https://www.jiaolong.xyz
    
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

<BlogList :tags="theme.tags" :items ="theme.blogs" />


<style>
.VPContent{
  &.is-home {
  width: 1000px  !important;
}
} 
</style>