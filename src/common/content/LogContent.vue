<template>
  <div>
    <Title :title="title" />
    <log-info :categories="categories" :tags="tags"></log-info>
    <log :blogs="blogs" :log="log"></log>
  </div>
</template>

<script>
import Title from "common/Title.vue";
import LogInfo from "./LogInfo";
import Log from "./Log";

export default {
  data() {
    return {
      blogs: []
    };
  },
  components: {
    Log,
    LogInfo,
    Title
  },
  computed: {
    log() {
      let id = this.$route.params.id;
      return this.blogs.find(item => {
        return item.id === id;
      });
    },
    title() {
      return this.log ? this.log.title : "";
    },
    categories() {
      return this.log ? this.log.categories : [];
    },
    tags() {
      return this.log ? this.log.tags : [];
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
      res = res.data;
      if (res.ret) {
        this.blogs = res.data;
      }
    }
  }
};
</script>

<style></style>
