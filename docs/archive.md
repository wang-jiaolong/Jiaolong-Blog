---
# https://vitepress.dev/reference/default-theme-home-page
layout: doc
aside: false
sidebar: true
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
      Archive
    </template>
    <!-- <template #lead>
      学习笔记
    </template> -->
  </VPTeamPageTitle>
</VPTeamPage>



<div class="archiveList" v-for="item in theme.years">

## {{ item.title }}({{ item.items.length }})

<ArchiveList :items ="item.items" />

</div>


<style>

.content{
    max-width: unset !important;
}

</style>

<style scoped lang="less">

.archiveList {
    max-width: 750px;

        /* width: 80%; */
    margin: 0 auto;
        @media (max-width: 419px) {
            padding: 0 5px;
        }
}
</style>