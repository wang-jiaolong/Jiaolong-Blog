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
      Reading list
    </template>
    <template #lead>
      Best Practice
    </template>
  </VPTeamPageTitle>
</VPTeamPage>



## Blog

> 一些时常会拜读的技术博客

- [肘子的Swift记事本](https://www.fatbobman.com/) —— Swift技术博客



## Quick Start

>   从入门到放弃

- [Hacking with Swift](https://www.hackingwithswift.com/quick-start/swiftui) —— SwiftUI by Example

## Architecture

- [「及游册」技术架构大揭秘](https://suoxing.noto.so/dev/travelog/arch)
- [Clean Architecture for SwiftUI](https://nalexn.github.io/clean-architecture-swiftui/?utm_source=nalexn_github)

## Swift & SwiftUI

- [What is a Computed Property in Swift?](https://www.avanderlee.com/swift/computed-property/)
- [How can I have two alerts on one view in SwiftUI?](https://stackoverflow.com/questions/58069516/how-can-i-have-two-alerts-on-one-view-in-swiftui)