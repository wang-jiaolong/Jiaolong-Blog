<template>
  <div class="tags-wrapper card-box">
    <router-link
      to="/categories/"
      class="title iconfont icon-biaoqian1"
      title="全部标签"
    >{{ length === 'all' ? '全部标签' : '热门标签' }}</router-link>
    <div class="tags">
      <template v-for="(item, index) in tags">
        <router-link
          :to="`/categories/?tag=${encodeURIComponent(item.key)}`"
          :key="index"
          :style="tagStyleList[index]"
          :class="{active: item.key === tag}"
        >{{item.key}}</router-link>
        <span :key="index+tags.length" />
      </template>
      <router-link
        to="/categories/"
        v-if="length !== 'all' && tagsData.length > length"
      >更多...</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: ''
    },
    tagsData: {
      type: Array,
      default: []
    },
    length: {
      type: [String, Number],
      default: 'all'
    }
  },
  data () {
    return {
      tagBgColor: ['#00b4d8', '#48cae4', '#90e0ef','#ade8f4','#caf0f8'],
      tagStyleList: []
    }
  },
  created () {
    for (let i = 0, tagH = this.tags.length; i < tagH; i++) {
      this.tagStyleList.push(this.getTagStyle(i))
    }
  },
  computed: {
    tags () {
      if (this.length === 'all') {
        return this.tagsData
      } else {
        return this.tagsData.slice(0, this.length)
      }
    }
  },
  methods: {
    getTagStyle (index) {
      const tagBgColor = this.tagBgColor
      const randomColor = index < tagBgColor.length-1 ? tagBgColor[index] : tagBgColor[tagBgColor.length-1]
      return `background: ${randomColor};--randomColor:${randomColor};`
    }
  }
}
</script>

<style lang='stylus'>
.tags-wrapper
  padding 0 .95rem
  .title
    color var(--textColor)
    opacity 0.9
    font-size 1.2rem
    &::before
      margin-right 0.3rem
  .tags
    padding 0.8rem 0.5rem 0.5rem 0.5rem
    margin 0 -0.5rem -0.5rem -0.5rem
    a
      opacity 0.8
      display inline-block
      padding 0.2rem 0.4rem
      transition all 0.4s
      background-color var(--textColor)
      color var(--mainBg)
      border-radius 3px
      margin 0 0.3rem 0.5rem 0
      min-width 2rem
      height 1rem
      line-height 1rem
      font-size 0.8rem
      text-align center
      @media (max-width $MQMobile)
        font-weight 400
      &:hover
        opacity 1
        transform scale(1.1)
      &.active
        box-shadow 0 5px 10px -5px var(--randomColor, rgba(0, 0, 0, 0.15))
        transform scale(1.22)
        opacity 1
        &:hover
          text-decoration none
</style>
