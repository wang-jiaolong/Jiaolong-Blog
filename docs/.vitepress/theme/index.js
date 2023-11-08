// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import './myStyle.css'
import './custom.css'
import '@icon-park/vue-next/styles/index.css';

import LinkCard from "../components/LinkCard.vue"
import QuoteCard from "../components/QuoteCard.vue"
import Timeline from "../components/Timeline.vue"
import ArchiveList from "../components/ArchiveList.vue"
import BlogList from "../components/BlogList.vue"
import AppList from "../components/AppList.vue"
import WeeklyList from "../components/WeeklyList.vue"

import MyLayout from "../components/MyLayout.vue";


export default {
  // ...Theme,
  extends: Theme,
  Layout: MyLayout,
  enhanceApp({ app, router, siteData }) {
    // app.component('myLayout', MyLayout)
  },
  enhanceApp(ctx) {
    // register your custom global components
    ctx.app.component('LinkCard',LinkCard)
    ctx.app.component('QuoteCard',QuoteCard)
    ctx.app.component('Timeline',Timeline)
    ctx.app.component('ArchiveList',ArchiveList)
    ctx.app.component('BlogList',BlogList)
    ctx.app.component('AppList',AppList)
    ctx.app.component('WeeklyList',WeeklyList)

  }

}
