<template>
  <div class="custom-page categories-page">
    <MainLayout>
      <template #mainLeft>
        <CategoriesBar
          v-if="$categoriesAndTags.categories.length"
          :categoriesData="$categoriesAndTags.categories"
          :category="category"
        />
        <TagsBar
          v-if="$categoriesAndTags.tags.length"
          :tagsData="$categoriesAndTags.tags"
          :tag="tag"
        />
        <PostList
          :currentPage="currentPage"
          :perPage="perPage"
          :category="category"
          :tag="tag"
        />
        <Pagination
          :total="total"
          :perPage="perPage"
          :currentPage="currentPage"
          @getCurrentPage="handlePagination"
          v-show="Math.ceil(total / perPage) > 1"
        />
      </template>
      <template #mainRight>
        <div class="infoBar">
        <CategoriesBar
          v-if="$categoriesAndTags.categories.length"
          :categoriesData="$categoriesAndTags.categories"
          :category="category"
        />
        <TagsBar
          v-if="$categoriesAndTags.tags.length"
          :tagsData="$categoriesAndTags.tags"
          :tag="tag"
        />
        </div>
      </template>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from '@theme/components/MainLayout'
import PostList from '@theme/components/PostList'
import Pagination from '@theme/components/Pagination'
import CategoriesBar from '@theme/components/CategoriesBar'
import TagsBar from '@theme/components/TagsBar'

export default {
  data() {
    return {
      category: '',
      tag:'',
      total: 0, // 总长
      perPage: 10, // 每页长
      currentPage: 1// 当前页
    }
  },
  components: { MainLayout, PostList, Pagination, CategoriesBar,TagsBar },
  mounted() {
    const queryCategory = this.$route.query.category
    const queryTag = this.$route.query.tag

    if (queryCategory) {
      this.category = queryCategory
      this.total = this.$groupPosts.categories[queryCategory].length
    } else if (queryTag) {
      this.tag = queryTag
      this.total = this.$groupPosts.tags[queryTag].length
    } else {
      this.total = this.$sortPosts.length
    }
    

    if (this.$route.query.p) {
      this.currentPage = Number(this.$route.query.p)
    }


    // 滚动条定位到当前分类（增强用户体验）
    const cateEl = document.querySelector('.categories')
    if (cateEl) {
      setTimeout(() => {
        const activeEl = cateEl.querySelector('.active')
        const topVal = activeEl ? activeEl.offsetTop : 0
        cateEl.scrollTo({ top: topVal, behavior: 'smooth' })
      }, 300)
    }
  },
  methods: {
    handlePagination(i) { // 分页
      this.currentPage = i
    }
  },
  watch: {
    '$route.query.category'(category) {
      this.category = category ? decodeURIComponent(category) : ''
      if (this.category) {
        this.total = this.$groupPosts.categories[this.category].length
      } 
      if (!this.category && !this.tag) {
        this.total = this.$sortPosts.length
      }
      this.currentPage = 1
    },
    '$route.query.tag'(tag) {
      console.log(tag)
      this.tag = tag ? decodeURIComponent(tag) : ''
      if (this.tag) {
        this.total = this.$groupPosts.tags[this.tag].length
      }
      if (!this.category && !this.tag) {
        this.total = this.$sortPosts.length
      }
      this.currentPage = 1
    }
  }
}
</script>

<style lang='stylus'>
.categories-page

  .infoBar
    position sticky
    top: ($navbarHeight + 0.9rem)

  .categories-wrapper
    max-height calc(100vh - 10rem)
    min-height 4.2rem
    @media (max-width $MQMobile)
      display none
    .categories
      // padding-right 0.3rem
      max-height calc(100vh - 14rem)
      min-height 2.2rem
      overflow-y auto
      transition all 0.2s
      position relative
      a
        padding-right 1.8rem
        span
          right 1rem
      &::-webkit-scrollbar-track-piece
        background-color rgba(0, 0, 0, 0.05)
      &::-webkit-scrollbar-thumb:vertical
        background-color rgba(0, 0, 0, 0.15)
      &:hover
        &::-webkit-scrollbar-track-piece
          background-color rgba(0, 0, 0, 0.1)
        &::-webkit-scrollbar-thumb:vertical
          background-color rgba(0, 0, 0, 0.25)


  .tags-wrapper
    position sticky
    top: ($navbarHeight + 0.9rem)
    max-height calc(100vh - 10rem)
    min-height 4.2rem
    @media (max-width $MQMobile)
      display none
  .tags
    max-height calc(100vh - 14rem)
    min-height 2.2rem
    overflow-x hidden
    overflow-y auto
    transition all 0.2s
    &::-webkit-scrollbar-track-piece
      background-color rgba(0, 0, 0, 0.05)
    &::-webkit-scrollbar-thumb:vertical
      background-color rgba(0, 0, 0, 0.15)
    &:hover
    &::-webkit-scrollbar-track-piece
      background-color rgba(0, 0, 0, 0.1)
    &::-webkit-scrollbar-thumb:vertical
      background-color rgba(0, 0, 0, 0.25)
.categories-page
  .main-left
    .categories-wrapper
      position static
      top 0
      padding 0.9rem 1.5rem
      margin-bottom 0.9rem
      max-height 15rem
      display none
      @media (max-width $MQMobile)
        display block
      .categories
        max-height 12.3rem
    .tags-wrapper
      position relative
      top 0
      padding 0.9rem 1.5rem
      margin-bottom 0.9rem
      max-height 15rem
      display none
      @media (max-width $MQMobile)
        display block
      .tags
        max-height 11.5rem
.theme-style-line
  .categories-page
    .main-left
      .categories-wrapper
        @media (max-width $MQMobile)
          //margin-top -0.91rem
          //margin-bottom -1px
          padding 0.9rem 0.5rem
          padding-bottom 0.5rem
          margin 0px 20px 20px
      .tags-wrapper
        @media (max-width $MQMobile)
          padding 0.9rem 0.5rem
          padding-bottom 0.5rem
          margin 0px 20px 20px

</style>
