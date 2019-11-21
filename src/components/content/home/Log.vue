<template>
  <div class="content markdown-body">
     <component v-bind:is="componentFile"></component>
  </div>
</template>

<script>
import "highlight.js/styles/github.css";
import "github-markdown-css";
import blogs from "./../../../assets/blog.json";
export default {
  created() {},
  data() {
    const componentFile = this.render;
    return {
      blogs,
      componentFile,
    }
  },
  computed: {
    log() {
      return this.blogs.find(item => {
        return item.id === this.$route.params.id;
      });
    }
  },
    methods: {
      render () {
        this.componentFile =  () => ({
          component: import(`./../../../assets/blogMd/${this.log?this.log.filename:"this.md"}`),
          loading: { template: '<div style="height: 100%; width: 100%; display: table;"><div style="display: table-cell; vertical-align: middle; text-align: center;"><div>加载中</div></div></div>' },
          error:  { template: '<div style="height: 100%; width: 100%; display: table;"><div style="display: table-cell; vertical-align: middle; text-align: center;"><div>加载错误</div></div></div>' },
          delay: 200,
          timeout: 10000
        });
      }
    },
    watch: {
      log () {
        this.render()
      }
    }
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
  font-size: 1.1rem;
}
</style>
