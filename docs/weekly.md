---
# https://vitepress.dev/reference/default-theme-home-page
# layout: doc
aside: true
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

<VPTeamPage style="padding-bottom: unset !important;">
  <VPTeamPageTitle>
    <template #title>
      Weekly
    </template>
    <template #lead>
      人生流水账
    </template>
  </VPTeamPageTitle>
</VPTeamPage>

<div class="yearList" v-for="item in theme.weekly">

## {{ item.title }}

<WeeklyList :items ="item.items" />

</div>