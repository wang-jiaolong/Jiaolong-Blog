---
layout: doc
aside: false
---

<script setup>

import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const code = [
  // { title:"C",link:"/pages/wiki/swift",icon:"./wiki/c.png",desc:"回炉重造" },
  { title:"SwiftUI",link:"/pages/wiki/swift",icon:"./wiki/swiftui.png",desc:"SwiftUI" },
    // { title:"Git",link:"/pages/wiki/swift",icon:"./wiki/git.png",desc:"Git" },

]

const os = [
  { title:"Windows",link:"/pages/wiki/swift",icon:"./wiki/windows.png",desc:"Windows" },
  { title:"Linux",link:"/pages/wiki/swift",icon:"./wiki/linux.png",desc:"Linux" },
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

### Code

<br>

<LinkCard  :items ="code" />


<!-- 
### OS

<br> -->

<LinkCard  :items ="os" />

<style>

.content{
    
    max-width: unset !important;

}

</style>