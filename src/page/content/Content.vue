<template>
  <div class="content">
    <div class="content-logs">
      <content-left v-if="isRoot" :blogs="blogs"></content-left>
      <router-view v-else></router-view>
      <content-right ></content-right>
    </div>
  </div>
</template>

<script>
import ContentLeft from "./components/ContentLeft";
import ContentRight from "./components/ContentRight";
export default {
  name: "Content",
  data(){
    return{
      blogs:[]
    }
  },
    mounted() {
    this.getBlogJson();
  },
  computed:{
    isRoot(){
      return this.$route.fullPath === '/'
    }
  },
  methods: {
    getBlogJson() {
      this.axios.get('blog.json')
        .then(this.getBlogJsonSucc);
    },
    getBlogJsonSucc(res) {
      res = res.data;
      if(res.ret){
        this.blogs = res.data
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
  margin 0 auto
  @media (max-width : 1420px)
    width 88% !important
  .content-logs
    display flex
    justify-content space-between
</style>
