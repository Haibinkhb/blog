<template>
  <div class="article-list-container">
    <div class="article-list border-bottom" v-for="log in blogs" :key="log._id">
      <div>
        <article-date :date="log.date"></article-date>
      </div>
      <div class="article">
        <content-logs :log="log"></content-logs>
        <div class="tag-list" v-show="!showTags">
          <tag v-for="(tag, index) in log.tags" :key="index" :tag="tag"></tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentLogs from "./ContentLogs.vue";
import ArticleDate from "./ArticleDate.vue";
import Tag from "./../Tag";
export default {
  props: {
    blogs: Array
  },
  components: {
    ContentLogs,
    ArticleDate,
    Tag
  },
  computed: {
    showTags() {
      return this.$route.path.indexOf("Tags/list") > -1;
    }
  }
};
</script>

<style lang="stylus" scoped>
.article-list-container
    width 100%
    display flex
    flex-direction column-reverse
    .article-list
        width 100%
        display flex
        margin-top .4rem
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
