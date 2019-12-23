<template>
  <div class="content-left">
    <content-title :count="blogs.length"></content-title>
    <article-list :blogs="blogs"></article-list>
  </div>
</template>

<script>
import ContentTitle from "./ContentTitle.vue"
import ArticleList from "common/content/ArticleList.vue"
export default {
  props: {
    blogs: Array
  },
  components: {
    ContentTitle,
    ArticleList
  }
};
</script>

<style lang="stylus" scoped>
.content-left
  width 78%
  @media (max-width : 980px)
    width 100%
</style>
