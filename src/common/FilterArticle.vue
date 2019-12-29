<template>
  <div>
    <Title :title="title"></Title>
    <article-list :blogs="filterArr"></article-list>
  </div>
</template>

<script>
import Title from "./Title.vue";
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
      let filterArr = [];
      if (this.$route.path.indexOf("Tags") > -1) {
        filterArr = this.blogs.filter(item => {
          return item.tags.indexOf(this.$route.params.id) > -1;
        });
      } else if (this.$route.path.indexOf("Categories") > -1) {
        filterArr = this.blogs.filter(item => {
          return item.categories.indexOf(this.$route.params.id) > -1;
        });
      } else if (this.$route.path.indexOf("Search") > -1) {
        filterArr = this.blogs.filter(item => {
          return (
            item.title
              .toLowerCase()
              .indexOf(this.$route.params.id.toLowerCase()) > -1
          );
        });
      }
        return filterArr
    },
    title() {
      if (this.$route.path.indexOf("search") > -1) {
        return "Search Result";
      } else {
        let routePath = this.$route.path.split("/");
        return routePath[routePath.length - 1];
      }
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
    ArticleList,
    Title
  }
};
</script>

<style></style>
