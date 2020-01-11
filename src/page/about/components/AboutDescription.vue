<template>
  <div class="about-description">
    <div class="description-left">
      <p>
        Hello!
        我叫旷海滨，是一名自学前端的小白。因为自学走了不少弯路，基础学的也不扎实，所以写了这个博客用来记录学习过程，加深理解，也方便复习。
        这个博客是用 Vue
        写的一个单页面应用，主要功能已经完成，但一些公用组件的可复用性并不太好，部分功能也还有更好的实现方式... 总之还有很多地方需要优化，后续会逐步完善，文章也会持续更新。
        各位大佬如果有什么好的建议还望不吝赐教。
      </p>
      <a class="source-code" href="https://github.com/Haibinkhb/blog"
        >查看源码</a
      >
      <card-link class="link" v-for="(link, index) in links" :key="index" :link="link"></card-link>
    </div>
    <div class="description-right">
        <img al="此处应为自拍" title="此处应为自拍" class="description-img" src="~assets/logo.jpg">
    </div>
  </div>
</template>

<script>
import CardLink from "common/content-right/CardLink.vue";
export default {
  data() {
    return {
         links: [
            { url:"https://github.com/Haibinkhb", webSite: "GitHub", userName: "Haibinkhb", iconClass: "git" },
            { url:"https://web.wechat.com/", webSite: "WeChat", userName: "a888888hbb", iconClass: "we-chat-colour" },
            { url:"https://im.qq.com/", webSite: "QQ", userName: "305688103", iconClass: "QQ" }
          ]
    };
  },
  components: {
    CardLink
  }
};
</script>

<style lang="stylus" scoped>
.about-description
    margin-top .5rem
    width 100%
    display flex
    .description-left
        font-size .40rem
        line-height .6rem
        font-weight 600
        width 60%
        @media (max-width : 980px)
            width 100%
        .source-code
            display inline-block
            margin-top .3rem
            text-decoration none
            color #2a579a
            font-size .32rem
            font-weight normal
        .link
            margin-top .3rem
            font-weight normal
    .description-right
        width 40%
        @media (max-width : 980px)
            display none
        .description-img
            width 100%
</style>
