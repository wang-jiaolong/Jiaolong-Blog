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


</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Blogs
    </template>
    <template #lead>
      学习笔记
    </template>
  </VPTeamPageTitle>
</VPTeamPage>

> 共 {{ theme.blogs.length }} 篇

<BlogList :items ="theme.blogs" />

<style>

.content{
    max-width: unset !important;
}

</style>
