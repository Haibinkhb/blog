<template>
  <div class="header">
    <div class="header-content">
      <header-logo></header-logo>
      <header-content></header-content>
      <header-menu
        :showCategories="showCategories"
        @menuclick="handleMenuClick"
      ></header-menu>
    </div>
    <header-content-mobile
      :showCategories="showCategories"
      v-if="showContainer"
    ></header-content-mobile>
  </div>
</template>

<script>
import HeaderContent from "./componets/HeaderContent";
import HeaderContentMobile from "./componets/HeaderContentMobile";
import HeaderMenu from "./componets/HeaderMenu";
import HeaderLogo from "./componets/HeaderLogo";
export default {
  data() {
    return {
      clientWidth: "", // 监听屏幕宽度判断是否显示 HeaderContentMobile
      showContainer: false, // 是否显示 HeaderContentMobile
      showCategories: false
    };
  },
  mounted() {
    this.clientWidth = `${document.documentElement.clientWidth}px`;
    // 监听 window 的 resize 事件
    window.onresize = this.throttle(() => {
      this.clientWidth = `${document.documentElement.clientWidth}px`;
      // 隐藏 HeaderContentMobile
      if (parseInt(this.clientWidth) > 963) {
        // 实测 963 最合适
        this.showCategories = false;
        this.showContainer = false;
      }
    }, 50);
  },
  methods: {
    // 节流函数
    throttle(func, wait) {
      let timeout;
      return function() {
        let context = this;
        let args = arguments;
        if (!timeout) {
          timeout = setTimeout(function() {
            timeout = null;
            func.apply(context, args);
          }, wait);
        }
      };
    },
    handleMenuClick() {
      this.showContainer = !this.showContainer;
    }
  },
  components: {
    HeaderContent,
    HeaderContentMobile,
    HeaderMenu,
    HeaderLogo
  }
};
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
.header
  width 100vw
  background-color $themeColor
  line-height 1rem
  z-index 1
  position fixed
  top 0
  left 0
  .header-content
    width 60%
    display flex
    justify-content space-between
    align-items center
    margin 0 auto
  @media (max-width : 1420px)
    .header-content
      width 80% !important
  @media (max-width : 980px)
    .header-content
      width 88% !important
      justify-content space-between !important
</style>
