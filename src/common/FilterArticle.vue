<template>
  <div>
    <article-list :blogs="filterArr"></article-list>
  </div>
</template>

<script>
import ArticleList from "./content/ArticleList.vue";
export default {
  mounted() {
    this.getBlogJson();
  },
  data() {
    return {
      blogs: []
    };
  },
  computed: {
    filterArr() {
      let filterArr=[]
      if (this.$route.path.indexOf("Tags") > -1) {
        filterArr = this.blogs.filter(item => {
          return item.tags.indexOf(this.$route.params.id) > -1;
        });
      }else if(this.$route.path.indexOf("Categories") > -1){
        filterArr = this.blogs.filter(item => {
          return item.categories.indexOf(this.$route.params.id) > -1;
        });
      }
      return filterArr
    }
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
  },
  components: {
    ArticleList
  }
};
</script>

<style></style>
