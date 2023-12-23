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
      Map
    </template>
    <!-- <template #lead>
      收集箱
    </template> -->
  </VPTeamPageTitle>
</VPTeamPage>



## Blog

> 一些时常会拜读的技术博客

- [肘子的Swift记事本](https://www.fatbobman.com/) —— Swift技术博客



## Quick Start

>   从入门到放弃

- [Hacking with Swift](https://www.hackingwithswift.com/quick-start/swiftui) —— SwiftUI by Example


## Best Practice

**Swift**

- [What is a Computed Property in Swift?](https://www.avanderlee.com/swift/computed-property/)

