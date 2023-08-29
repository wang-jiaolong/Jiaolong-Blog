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
      Inbox
    </template>
    <template #lead>
      收集箱
    </template>
  </VPTeamPageTitle>
</VPTeamPage>

## 大佬 ’s Blog

- [http://www.fatbobman.com](肘子的Swift笔记) —— 肘子的Swift笔记
