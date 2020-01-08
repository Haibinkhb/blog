<template>
  <div class="content">
    <div class="content-logs">
      <content-left v-if="isRoot" :blogs="blogs"></content-left>
      <div v-else class="content-view">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <content-right :cardList="cardList"></content-right>
    </div>
  </div>
</template>

<script>
import ContentLeft from "./components/ContentLeft";
import ContentRight from "./components/ContentRight";
export default {
  name: "Content",
  data() {
    return {
      blogs: [],
      cardList: [
        {
          id: 1,
          name: "link",
          header: "More Links",
          content: [
            { url:"https://github.com/Haibinkhb", webSite: "GitHub", userName: "Haibinkhb", iconClass: "git" },
            { url:"https://web.wechat.com/", webSite: "WeChat", userName: "a888888hbb", iconClass: "we-chat-colour" },
            { url:"https://im.qq.com/", webSite: "QQ", userName: "305688103", iconClass: "QQ" }
          ]
        },
        {
          id: 2,
          name: "tags",
          header: "All Tags",
          content: []
        },
        {
          id: 3,
          name: "categories",
          header: "All Categories",
          content: []
        }
      ]
    };
  },
  mounted() {
    this.getBlogJson();
  },
  computed: {
    isRoot() {
      return this.$route.fullPath === "/";
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
        this.cardList[1].content = res.allTags;
        this.cardList[2].content = res.allCategories;
      }
    }
  },
  components: {
    ContentLeft,
    ContentRight
  }
};
</script>

<style lang="stylus" scoped>
.content
  background-color #fff
  width 60%
  margin 1.2rem auto
  @media (max-width : 1420px)
    width 80% !important
  @media (max-width : 980px)
    width 88% !important
  .content-logs
    display flex
    justify-content space-between
    .content-view
      width 78%
      @media (max-width : 980px)
        width 100% !important
</style>
