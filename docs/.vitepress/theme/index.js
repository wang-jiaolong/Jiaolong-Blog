// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import './myStyle.css'
import './custom.css'
import '@icon-park/vue-next/styles/index.css';

import LinkCard from "../components/LinkCard.vue"
import ArchiveList from "../components/ArchiveList.vue"
import BlogList from "../components/BlogList.vue"

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
    ctx.app.component('ArchiveList',ArchiveList)
    ctx.app.component('BlogList',BlogList)

  }

}
