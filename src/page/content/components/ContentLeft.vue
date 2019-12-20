<template>
  <div class="content-left">
    <div class="article-list border-bottom" v-for="log in blogs" :key="log._id">
      <div>
        <article-date :date="log.date"></article-date>
      </div>
      <div class="article">
        <content-logs :log="log"></content-logs>
        <div class="tag-list">
          <content-tag v-for="(tag, index) in log.tags" :key="index" :tag="tag"></content-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentLogs from "common/content/ContentLogs.vue";
import ArticleDate from "common/content/ArticleDate.vue";
import ContentTag from "common/content/ContentTag";
export default {
  props: {
    blogs: Array
  },
  components: {
    ContentLogs,
    ArticleDate,
    ContentTag
  }
};
</script>

<style lang="stylus" scoped>
.content-left
  width 75%
  .article-list
    width 100%
    display flex
    margin .4rem 0
    .article
      margin-bottom .4rem
      display flex
      flex-direction column
      margin-left .5rem
      .tag-list
        display flex
        flex-direction row
        margin-top .4rem
</style>
