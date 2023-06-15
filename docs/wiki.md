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


const mobile = [
  {title:"Swift",link:"/pages/wiki/swift",icon:"./wiki/swiftui.png",desc:"SwiftUI"}
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Wiki
    </template>
    <template #lead>
      到底要记住多少命令行才会让脑袋爆炸呢？
    </template>
  </VPTeamPageTitle>
</VPTeamPage>

### Mobile

<br>

<LinkCard  :items ="mobile" />

<style>

.content{
    max-width: unset !important;
}
</style>
