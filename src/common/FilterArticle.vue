<template>
  <div>
    <Title :title="title"></Title>
    <article-list v-if="filterArr.length" :blogs="filterArr"></article-list>
    <div v-else class="no-result-prompt">No Matching Result</div>
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
      let filterArr = [],
        id = this.$route.params.id,
        path = this.$route.path;
      if (path.indexOf("Tags") > -1) {
        filterArr = this.blogs.filter(item => {
          return item.tags.indexOf(id) > -1;
        });
      } else if (path.indexOf("Categories") > -1) {
        filterArr = this.blogs.filter(item => {
          return item.categories.indexOf(id) > -1;
        });
      } else if (path.indexOf("Search") > -1) {
        filterArr = this.blogs.filter(item => {
          return item.title.toLowerCase().indexOf(id.toLowerCase()) > -1;
        });
      } else if (path.indexOf("Archive") > -1) {
        let token = this.$route.params.token ? this.$route.params.token : "";
        filterArr = this.blogs.filter(item => {
          if (token) {
            return item.date.indexOf(`${id}-${token}`) > -1;
          }
          return item.date.indexOf(id) > -1;
        });
      }
      return filterArr;
    },
    title() {
      if (this.$route.path.indexOf("Search") > -1) {
        return "Search Result";
      } else if (this.$route.path.indexOf("Archive") > -1) {
        let id = this.$route.params.id;
        let token = this.$route.params.token ? this.$route.params.token : "";
        if (token) {
          return `All potos in ${id}.${token}`;
        }
        return `All potos in ${id}`;
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

<style lang="stylus" scoped>
.no-result-prompt
  margin-top .2rem
  padding .4rem
  box-sizing border-box
  font-size .44rem
  color #0c5460
  background-color #D1ECF1
  border-radius .1rem
</style>
