<template>
  <div class="theme-code-group">
    <div class="theme-code-group__nav">
      <ul class="theme-code-group__ul">
        <li
          v-for="(tab, i) in codeTabs"
          :key="tab.title"
          class="theme-code-group__li"
        >
          <button
            class="theme-code-group__nav-tab"
            :class="{
              'theme-code-group__nav-tab-active': i === activeCodeTabIndex
            }"
            @click="changeCodeTab(i)"
          >
            {{ tab.title }}
          </button>
        </li>
      </ul>
    </div>
    <slot />
    <pre v-if="codeTabs.length < 1" class="pre-blank">
// Make sure to add code blocks to your code group</pre
    >
  </div>
</template>

<script>
export default {
  name: 'CodeGroup',
  data () {
    return {
      codeTabs: [],
      activeCodeTabIndex: -1
    }
  },
  watch: {
    activeCodeTabIndex (index) {
      this.codeTabs.forEach(tab => {
        tab.elm.classList.remove('theme-code-block__active')
      })
      this.codeTabs[index].elm.classList.add('theme-code-block__active')
    }
  },
  mounted () {
    this.codeTabs = (this.$slots.default || []).filter(slot => Boolean(slot.componentOptions)).map((slot, index) => {
      if (slot.componentOptions.propsData.active === '') {
        this.activeCodeTabIndex = index
      }

      return {
        title: slot.componentOptions.propsData.title,
        elm: slot.elm
      }
    })

    if (this.activeCodeTabIndex === -1 && this.codeTabs.length > 0) {
      this.activeCodeTabIndex = 0
    }
  },
  methods: {
    changeCodeTab (index) {
      this.activeCodeTabIndex = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.theme-code-group
  box-shadow: 0 4px 9px #00000073
.theme-code-group, .theme-code-group__nav
  background-color var(--codeBg)
  border-radius 6px
  //padding 10px
  padding-top 0px
  margin-top 15px
.theme-code-group__nav
  margin-bottom -20px
  background-color var(--codeBg)
.theme-code-group__ul
  margin auto 0
  padding-left 10px
  padding-top 5px
  display inline-flex
  list-style none
.theme-code-group__li, .theme-code-group__nav-tab
  border 0
  padding 5px
  padding-bottom 3px
  cursor pointer
  background-color transparent
  font-size 14px
  line-height 1.4
  color var(--codeColor)
  font-weight 600
  opacity 0.85
  margin-bottom 5px
  @media (max-width $MQMobile)
    font-size 8px
.theme-code-group__nav-tab-active
  border-bottom $accentColor 3px solid
  color var(--textLightenColor)
  opacity 1
.pre-blank
  color $accentColor
</style>
