---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: './logo.png',
    name: 'Jiaolong Wang',
    title: 'Creator',
    links: [
      // { icon: 'github', link: 'https://github.com/yyx990803' },
      // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },

]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      About me
    </template>
    <template #lead>
    <br>
会敲代码｜看了点书｜有点想法<br><br>
不务正业｜啥都想学｜花里胡哨<br><br>
一切值得｜保持热爱｜无限进步<br><br>
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>