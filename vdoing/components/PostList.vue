<template>
  <div class="post-list" ref="postList">
    <div v-if="isHome">

    <transition-group tag="div" name="post">
      <div :class="item.frontmatter.sticky && 'iconfont icon-zhiding'" v-for="item in sortPosts"
        :key="item.key">
      
          <div class="post-item">
            <router-link :to="item.path">
              <div class="post-item-img">
                <img :src="item.frontmatter.img" />
              </div>
            </router-link>
            <div class="post-item-info">


              <div class="date">
              <span title="创建时间" class="iconfont icon-riqi" v-if="item.frontmatter.date">
                {{item.frontmatter.date.split(' ')[0]}}
              </span>
                </div>
              <router-link :to="item.path" class="post-item-title">

                <h2>
                  {{ item.title }}
                  <span class="title-tag" v-if="item.frontmatter.titleTag">{{
                      item.frontmatter.titleTag
                  }}</span>
                </h2>

                <h3 v-if="item.frontmatter.subtitle">
                  {{ item.frontmatter.subtitle }}
                </h3>
              </router-link>

              <div class="post-item-content" v-if="item.excerpt">
                <div class="excerpt" v-html="item.excerpt"></div>
              </div>

            </div>
          </div>


      </div>
    </transition-group>
</div>

<div v-else>
  <transition-group tag="div" name="post">
      <div class="post card-box" :class="item.frontmatter.sticky && 'iconfont icon-zhiding'" v-for="item in sortPosts"
        :key="item.key">
        <router-link :to="item.path">

          <div class="title-wrapper">
            <h2>
                {{ item.title }}
                <span class="title-tag" v-if="item.frontmatter.titleTag">{{
                    item.frontmatter.titleTag
                }}</span>
            </h2>
            <div class="article-info">
              <a title="作者" class="iconfont icon-touxiang" target="_blank" v-if="item.author && item.author.href"
                :href="item.author.href">{{ item.author.name ? item.author.name : item.author }}</a>
              <span title="作者" class="iconfont icon-touxiang" v-else-if="item.author">{{ item.author.name ?
                  item.author.name : item.author
              }}</span>

              <span title="创建时间" class="iconfont icon-riqi" v-if="item.frontmatter.date">{{
                  item.frontmatter.date.split(' ')[0]
              }}</span>
              <span title="分类" class="iconfont icon-wenjian" v-if="
                $themeConfig.category !== false && item.frontmatter.categories
              ">
                <router-link :to="`/categories/?category=${encodeURIComponent(c)}`"
                  v-for="(c, index) in item.frontmatter.categories" :key="index">{{ c }}</router-link>
              </span>
              <span title="标签" class="iconfont icon-biaoqian tags" v-if="
                $themeConfig.tag !== false &&
                item.frontmatter.tags &&
                item.frontmatter.tags[0]
              ">
                <router-link :to="`/tags/?tag=${encodeURIComponent(t)}`" v-for="(t, index) in item.frontmatter.tags"
                  :key="index">{{ t }}</router-link>
              </span>
            </div>
          </div>

          <div class="excerpt-wrapper" v-if="item.excerpt">
            <div class="excerpt" v-html="item.excerpt"></div>
          </div>
 </router-link>
      </div>
    </transition-group>
</div>


  </div>
</template>

<script>

export default {
  props: {
    category: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: ''
    },
    currentPage: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 10
    },
    isHome: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sortPosts: [],
      postListOffsetTop: 0
    }
  },
  created() {
    this.setPosts()
  },
  mounted() {
    // this.postListOffsetTop = this.getElementToPageTop(this.$refs.postList) - 240
  },
  watch: {
    currentPage() {
      if (this.$route.query.p != this.currentPage) { // 此判断防止添加相同的路由信息（如浏览器回退时触发的）
        this.$router.push({
          query: {
            ...this.$route.query,
            p: this.currentPage
          }
        })
      }
      // setTimeout(() => {
      //   window.scrollTo({ top: this.postListOffsetTop }) // behavior: 'smooth'
      // },0)
      this.setPosts()
    },
    category() {
      this.setPosts()
    },
    tag() {
      this.setPosts()
    }
  },
  methods: {
    setPosts() {
      const currentPage = this.currentPage
      const perPage = this.perPage
      let posts = []
      if (this.category) {
        posts = this.$groupPosts.categories[this.category]
      } else if (this.tag) {
        posts = this.$groupPosts.tags[this.tag]
      } else {
        posts = this.isHome ? this.$sortHomePosts : this.$sortPosts
      }

      this.sortPosts = posts.slice((currentPage - 1) * perPage, currentPage * perPage)
    },
    // getElementToPageTop(el) {
    //   if(el && el.parentElement) {
    //     return this.getElementToPageTop(el.parentElement) + el.offsetTop
    //   }
    //   return el.offsetTop
    // }
  }
}
</script>




<style lang='stylus'>
.post-list
  //padding-bottom 5rem
  .post
    position relative
    padding 1rem 1.5rem
    margin-bottom 0.8rem
    transition all 0.3s
    border 1px solid var(--borderColor)
    box-shadow 1px 1px 20px rgba(0,0,0,.2)
    margin-bottom 20px
    @media (max-width $MQMobile)
      margin-left 20px
      margin-right 20px
    //&:last-child
      //border-bottom none
    &.post-leave-active
      display none
    &.post-enter
      opacity 0
      transform translateX(-20px)
    &::before
      position absolute
      top -1px
      right 0
      font-size 2.5rem
      color $activeColor
      opacity 0.85
    .title-wrapper
      color var(--textColor)
      a
        color var(--textColor)
        &:hover
          color $accentColor
      h2
        margin 0.5rem 0
        font-size 1.4rem
        border none
        @media (max-width $MQMobile)
          font-size 1.2rem
        &:hover
          color $accentColor
        .title-tag
          height 1.2rem
          line-height 1.2rem
          border 1px solid $activeColor
          color $activeColor
          font-size 0.8rem
          padding 0 0.35rem
          border-radius 0.2rem
          margin-left 0rem
          transform translate(0, -0.15rem)
          display inline-block
        a
          display block
          @media (max-width $MQMobile)
            font-weight 400
      .article-info
        > a, > span
          opacity 0.7
          font-size 0.8rem
          margin-right 1rem
          cursor pointer
          &::before
            margin-right 0.3rem
          a
            margin 0
            &:not(:first-child)
              &::before
                content '/'
        .tags a:not(:first-child)::before
          content '、'
      
    .excerpt-wrapper
      color var(--textColor)
      border-top 1px solid var(--borderColor)
      margin 0.5rem 0
      overflow hidden
      .excerpt
        margin-bottom 0.3rem
        font-size 0.92rem
        h1, h2, h3
          display none
        img
          max-height 280px
          max-width 100% !important
          margin 0 auto
      .readmore
        float right
        margin-right 1rem
        line-height 1rem
        &::before
          float right
          font-size 0.8rem
          margin 0.1rem 0 0 0.2rem

.theme-style-line
  .post-list
    //border 1px solid var(--borderColor)
    border-bottom none
    border-radius 5px
    overflow hidden




.post-list
      .post-item
        color var(--textColor)
        position: relative;
        margin: 80px auto 100px;
        padding: 0 40px;
        @media (max-width $MQMobile)
          margin 40px auto 0
          border-bottom none
          padding: 0 30px
          //max-width 400px
        .post-item-img
          display inline-block
          width 550px
          height 340px
          overflow hidden
          position relative
          z-index 1
          cursor pointer
          @media (max-width $MQMobile)
            width 100%
            height 100%
          img
            width 100%
            height 100%
            object-fit cover
            transition all 0.6s
            border-radius 10px
            @media (max-width $MQMobile)
              width 100%
              height 100%
              border-radius 10px
          &:hover
            img 
              transform scale(1.1)
      .post-item-info
        left 520px
        position absolute
        text-align left
        top 30px
        height 340px
        width 490px
        border 1px solid var(--borderColor)
        border-radius 5px
        overflow-y hidden

        @media (max-width $MQMobile)
          width:100%
          border none 
          border-bottom 1px solid var(--borderColor)
          height auto;
          position static
          border-radius 0px
      .date
        color #a9a9a9
        font-size 14px
        margin 80px 0 0 100px
        @media (max-width $MQMobile)
          margin-left 5px
          margin-top 10px
        span
          font-size 14px
      h2
        font-size 30px
        font-weight 400
        line-height 1.1
        margin 10px 100px 0 100px
        color var(--textColor)
        border-bottom none
        @media (max-width $MQMobile)
          margin-left 5px
          font-size 24px

      h3
        font-size: 16px;
        font-weight: 400;
        margin: 10px 100px 0 100px;
        line-height: 1.8;      
        color var(--textColor)
        @media (max-width $MQMobile)
          margin-left 5px
      .post-item-content
        line-height: 1.8;
        font-size: 14px;
        margin: 10px 100px 0 100px;
        @media (max-width $MQMobile)
          display: none;





</style>
