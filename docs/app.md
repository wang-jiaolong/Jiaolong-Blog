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


const notes = [
  {
    title: 'Notion',
    desc: 'All In One Workspace',
    icon:'notion.png',
    link:'https://www.notion.so/product?fredir=1'
  },
  {
    title: 'Flomo',
    desc: '持续不断记录，意义自然浮现',
    icon:'flomo.png',
    link:'https://www.notion.so/product?fredir=1'
  },
  {
    title: 'Typora',
    desc: '本地Markdown编辑器',
    icon:'typora.png',
    link:'https://www.notion.so/product?fredir=1'
  }
]

const macs = [
  {
    title: 'Mos',
    desc: '让鼠标更加丝滑',
    icon:'mos.PNG',
    link:'https://www.notion.so/product?fredir=1'
  },
  {
    title: 'oh-my-zsh',
    desc: '终端加强',
    icon:'oh-my-zsh.PNG',
    link:'https://www.notion.so/product?fredir=1'
  }
]

const devs = [
  {
    title: 'VSCode',
    desc: '必备代码编辑器',
    icon:'vscode.png',
    link:'https://www.notion.so/product?fredir=1'
  },
  {
    title: 'Xcodes',
    desc: '管理Xcode版本',
    icon:'xcodes.png',
    link:'https://www.notion.so/product?fredir=1'
  },
  {
    title: 'SwiftFormat',
    desc: '格式化Swift代码',
    icon:'swiftFormat.png',
    link:'https://www.notion.so/product?fredir=1'
  }
]


</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Inbox
    </template>
    <template #lead>
      资源库
    </template>
  </VPTeamPageTitle>
</VPTeamPage>


<AppList title="笔记" :items ="notes" />

<AppList title="Mac" :items ="macs" />

<AppList title="Development" :items ="devs" />
