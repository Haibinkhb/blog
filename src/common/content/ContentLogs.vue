<template>
  <div class="content-logs">
      <div>title</div>
      <div>desc</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      blogs: []
    };
  },
  mounted() {
    this.getBlogJson();
  },
  methods: {
    getBlogJson() {
      this.axios.get('blog.json')
        .then(this.getBlogJsonSucc);
    },
    getBlogJsonSucc(res) {
      this.blogs = res.data;
    }
  },
  components:{
  }
};
</script>

<style lang="stylus" scoped>
.content-logs
  display flex
  flex 1
  margin-left .4rem
</style>
