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

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Weekly
    </template>
    <template #lead>
      记录下我的成长和一些思考
    </template>
  </VPTeamPageTitle>
</VPTeamPage>


<Timeline></Timeline>

<style>

.content{
    max-width: unset !important;
}

</style>
