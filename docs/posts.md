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
      Posts
    </template>
    <template #lead>
      记录下我的成长和一些思考
    </template>
  </VPTeamPageTitle>
</VPTeamPage>

<Timeline :items="theme.posts"></Timeline>

<style>

.content{
    max-width: unset !important;
}

</style>
