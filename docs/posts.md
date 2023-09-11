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
      我的文章
    </template>
  </VPTeamPageTitle>
</VPTeamPage>

<ArchiveList :items ="theme.weekly" />

<style>

.content{
    max-width: unset !important;
}

</style>
