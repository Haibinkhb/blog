<template>
  <div class="content">
    <router-link v-if="!isAbout && isRoot" class="info-container" tag="div" to="/About">
      <div class="bg"></div>
      <div class="info-content">
        <img
        src="~assets/logo.jpg"
        alt="about shiro kuang"
        title="about shiro kuang"
      />
      <span>about shiro kuang</span>
      </div>
    </router-link>
    <div class="content-logs">
      <content-left v-if="isRoot" :blogs="blogs"></content-left>
      <div v-else ref="view" class="content-view">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <content-right v-if="!isAbout" :cardList="cardList"></content-right>
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
            {
              url: "https://github.com/Haibinkhb",
              webSite: "GitHub",
              userName: "Haibinkhb",
              iconClass: "git"
            },
            {
              url: "https://web.wechat.com/",
              webSite: "WeChat",
              userName: "a888888hbb",
              iconClass: "we-chat-colour"
            },
            {
              url: "https://im.qq.com/",
              webSite: "QQ",
              userName: "305688103",
              iconClass: "QQ"
            }
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
    },
    isAbout() {
      return this.$route.fullPath.startsWith("/About");
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
    },
  },
  watch:{
    isAbout(){
       if(this.isAbout && this.$refs.view){
        try{
          this.$refs.view.style.width = '100%'
        }catch(e){
          console.log(e)
        }
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
  .info-container
      display none
      @media (max-width : 580px)
        display block
        position relative
        width 100%
        background-color #fafafa
        .bg
          box-sizing border-box
          width 100%
          height 1.8rem
          background-image url("~assets/logo.jpg")
          background-repeat no-repeat
          background-position center
          background-size percentage(1.3%)
          filter blur(.25rem)
        .info-content
          width 100%
          height 100%
          position absolute
          top 0
          left 0
          display flex
          align-items center
          justify-content space-around
          img
            width 1.3rem
            heighrt 1.3rem
            border 5px solid rgba(0,0,0,.3)
            border-radius 50%
            cursor pointer
          span
            flex 1
            font-size .44rem
            margin 0 .5rem
            padding .3rem 0
            box-sizing border-box
            text-align center
            border-radius .1rem
            background-color rgba(0,0,0,.2)
</style>
