<template>
  <div class="content markdown-body">
    <component v-bind:is="componentFile"></component>
  </div>
</template>

<script>
import "highlight.js/styles/github.css";
import "github-markdown-css";
export default {
  created() {},
  data() {
    const componentFile = this.render;
    return {
      blogs: [],
      componentFile
    };
  },
  computed: {
    log() {
      return this.blogs.find(item => {
        return item.id === this.$route.params.id;
      });
    }
  },
  mounted() {
    this.getBlogJson();
  },

  methods: {
    getBlogJson() {
      this.axios.get("blog.json").then(this.getBlogJsonSucc);
    },
    getBlogJsonSucc(res) {
      this.blogs = res.data;
    },
    render() {
      this.componentFile = () => ({
        component: import(
          `./../../../../public/markdown/${this.log ? this.log.filename : "empty.md"}`
        ),
        loading: {
          template:
            '<div style="height: 100%; width: 100%; display: table;"><div style="display: table-cell; vertical-align: middle; text-align: center;"><div>加载中</div></div></div>'
        },
        error: {
          template:
            '<div style="height: 100%; width: 100%; display: table;"><div style="display: table-cell; vertical-align: middle; text-align: center;"><div>加载错误</div></div></div>'
        },
        delay: 200,
        timeout: 10000
      });
    }
  },
  watch: {
    log() {
      this.render();
    }
  }
};
</script>

<style scoped>
.content {
  border: 1px solid #e1e4e8;
  color: #24292e;
  width: 80vw;
  margin: 3rem auto;
  border-radius: 3px;
  padding: 1rem;
  font-size: .44rem;
}
</style>
