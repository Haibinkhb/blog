<template>
  <div class="content markdown-body">
    <keep-alive>
      <component :is="componentFile"></component>
    </keep-alive>
  </div>
</template>

<script>
import "highlight.js/styles/github.css";
import "github-markdown-css";

export default {
  data() {
    const componentFile = this.render;
    return {
      componentFile,
    };
  },
  props: {
    blogs:Array,
    log:Object
  },
  methods: {
    render() {
      this.componentFile = () => ({
        component: import(
          `markdown/${this.log ? this.log.filename : "empty.md"}`
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

<style lang="stylus" scoped>
.content
  color #24292e
  width 100%
  font-size .44rem
  @media (max-width : 1420px)
    width 100% !important
    font-size .36rem !important
.markdown-body
  margin 0
</style>
