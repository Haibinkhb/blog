<template>
  <div class="tag-list">
    <tag v-for="(tag, index) in tagList" :key="index" :tag="tag"></tag>
  </div>
</template>

<script>
import Tag from "common/Tag.vue";
export default {
  mounted() {
    this.getBlogJson();
  },
  data(){
      return {
          tagList:[]
      }
  },
  methods: {
    getBlogJson() {
      this.axios.get("blog.json").then(this.getBlogJsonSucc);
    },
    getBlogJsonSucc(res) {
      res = res.data;
      if (res.ret) {
        this.tagList = res.allTags;
      }
    }
  },
  components: {
    Tag
  }
};
</script>

<style lang="stylus" scoped>
.tag-list
    width 100%
    display flex
    flex-wrap wrap
</style>
