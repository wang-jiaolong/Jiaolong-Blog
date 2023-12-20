---
# https://vitepress.dev/reference/default-theme-home-page
layout: doc
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



## 技术博客

> 一些时常会拜读的技术博客

- [肘子的Swift记事本](https://www.fatbobman.com/) —— Swift技术博客


<br>
<br>


## iOS

**Swift**

- [What is a Computed Property in Swift?](https://www.avanderlee.com/swift/computed-property/)
