// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import './myStyle.css'
import '@icon-park/vue-next/styles/index.css';

import LinkCard from "../components/LinkCard.vue"
import QuoteCard from "../components/QuoteCard.vue"
import Timeline from "../components/Timeline.vue"

export default {
  // ...Theme,
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
  enhanceApp(ctx) {
    // register your custom global components
    ctx.app.component('LinkCard',LinkCard)
    ctx.app.component('QuoteCard',QuoteCard)
    ctx.app.component('Timeline',Timeline)

  }

}
