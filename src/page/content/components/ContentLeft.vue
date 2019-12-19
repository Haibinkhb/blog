<template>
  <div class="content-left border-bottom">
     <article-date></article-date>
    <content-logs></content-logs>
  </div>
</template>

<script>
import ContentLogs from "common/content/ContentLogs.vue"
import ArticleDate from "common/content/ArticleDate.vue"
export default {
  components: {
      ContentLogs,
      ArticleDate
  }
};
</script>

<style lang="stylus" scoped>
.content-left
  width 75%
  display flex
  padding .4rem 0
</style>