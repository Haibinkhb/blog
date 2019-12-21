<template>
  <div class="content-left">
    <content-title :count="blogs.length"></content-title>
    <div class="article-list border-bottom" v-for="log in blogs" :key="log._id">
      <div>
        <article-date :date="log.date"></article-date>
      </div>
      <div class="article">
        <content-logs :log="log"></content-logs>
        <div class="tag-list">
          <tag v-for="(tag, index) in log.tags" :key="index" :tag="tag"></tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentTitle from "./ContentTitle"
import ContentLogs from "common/content/ContentLogs.vue";
import ArticleDate from "common/content/ArticleDate.vue";
import Tag from "common/Tag";
export default {
  props: {
    blogs: Array
  },
  components: {
    ContentLogs,
    ArticleDate,
    Tag,
    ContentTitle
  }
};
</script>

<style lang="stylus" scoped>
.content-left
  width 78%
  @media (max-width : 980px)
    width 100%
  .article-list
    width 100%
    display flex
    margin .4rem 0
    .article
      margin-bottom .4rem
      display flex
      flex-direction column
      margin-left .5rem
      @media (max-width : 720px)
        margin-left 0 !important
      .tag-list
        display flex
        flex-direction row
        margin-top .2rem
</style>
