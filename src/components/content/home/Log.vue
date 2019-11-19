<template>
  <div class="content markdown-body">
    <markdown />
  </div>
</template>

<script>
import "highlight.js/styles/github.css";
import 'github-markdown-css'
import markdown from "./../../../assets/blogMd/prototype.md";
import blogs from "./../../../assets/blog.json";
export default {
  data() {
    return {
      blogs
    };
  },
  components: {
    markdown
  },
};
</script>

<style scoped>
.content {
  color: #24292e;
  width: 80vw;
  margin: 3rem auto;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  padding: 1rem;
}
</style>
