<template>
  <div class="header">
    <div class="header-content">
      <div class="header-logo">
        <router-link tag="span" to="/">Shiro</router-link>
      </div>
      <div @click="handleMenuClick">
        <icon-svg class="menu" icon-class="menu"></icon-svg>
      </div>
      <div class="content-container">
        <div class="content-list">
          <div
            @click="handleItemClick"
            class="header-item"
            v-for="(nav, index) in navList"
            :key="index"
          >
            <icon-svg class="header-icon" :icon-class="nav"></icon-svg>
            <span class="item-desc">{{ nav }}</span>
            <icon-svg
              v-if="nav === 'Categories'"
              class="categories-icon"
              icon-class="sort-down"
            ></icon-svg>
            <div v-if="nav === 'Categories'" class="categories-">

            </div>
          </div>
        </div>
        <div class="header-input">
          <input type="text" v-model="keyWord" />
          <div class="search-icon">
            <icon-svg icon-class="search"></icon-svg>
          </div>
        </div>
      </div>
    </div>
   <transition name="fade">
      <div class="content-container-xs" v-if="showContainer">
        <div class="content-list-xs">
          <div
            @click="handleItemClick"
            class="header-item-xs"
            v-for="(nav, index) in navList"
            :key="index"
          >
            <icon-svg class="header-icon-xs" :icon-class="nav"></icon-svg>
            <span class="item-desc-xs">{{ nav }}</span>
            <icon-svg
              v-if="nav === 'Categories'"
              class="categories-icon-xs"
              icon-class="sort-down"
            ></icon-svg>
          </div>
        </div>
        <div class="header-input-xs">
          <input type="text" v-model="keyWord" />
          <div class="search-icon-xs">
            <icon-svg icon-class="search"></icon-svg>
          </div>
        </div>
      </div>
   </transition>
  </div>
</template>

<script>
import IconSvg from "common/icon/IconSvg.vue";
export default {
  data() {
    return {
      keyWord: "Search",
      navList: ["Categories", "Tags", "Archive", "About"],
      clientWidth: 0,
      showContainer:false
    };
  },
  mounted() {
    this.clientWidth = `${document.documentElement.clientWidth}px`;
    // 监听 window 的 resize 事件
    window.onresize = this.throttle(()=>{
      this.clientWidth = `${document.documentElement.clientWidth}px`;
      // 隐藏 .content-container-xs 的内容
      if(parseInt(this.clientWidth) > 963){
        this.showContainer = false
      }
    }, 50);
  },
  watch: {
    // clientWidth(){
    //   if(parseInt(this.clientWidth) > 980){
    //     this.showContainer = false
    //   }
    // }
  },
  components: {
    IconSvg
  },
  computed: {},
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
    handleItemClick(e) {
      console.log(e.target);
    },
    handleMenuClick() {
      this.showContainer = !this.showContainer
    }
  }
};
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
.header
  width 100vw
  background-color $themeColor
  line-height 1rem
  @media (max-width : 1280px)
    .header-content
      width 90% !important
  @media (max-width : 980px)
    .header-content
      width 80% !important
      display flex
      justify-content space-between
      .content-container
        display none !important
      .menu
        padding .15rem
        border .02rem solid rgba(255,255,255,.5)
        border-radius .1rem
        color #fff
        font-size .44rem
        cursor pointer
        display block !important
  .header-content
    display flex
    align-items center
    margin 0 auto
    padding .14rem 0
    width 66%
    .menu
      display none
    .header-logo
      font-family SairaSemiCondensed-Bold
      font-size .56rem
      color #fff
      cursor pointer
    .content-container
      width 100%
      display flex
      justify-content space-around
      padding 0 .2rem
      text-align center
      .content-list
        display flex
        justify-content space-around
        .header-item
          cursor: pointer
          padding  0 .4rem
          font-size .40rem
          color rgba(255, 255, 255, 0.7)
          &:hover
            color #fff
          .item-desc
            padding-left .1rem
          .categories-icon
            font-size .34rem
            padding-left .2rem
      .header-input
        width 22%
        background-color rgba(255, 255, 255, 0.2)
        border-radius .1rem
        box-sizing border-box
        display flex
        align-items center
        justify-content space-between
        input
          background-color rgba(255, 255, 255, 0)
          color: #fff
          height 100%
          width 90%
          box-sizing border-box
          padding-left .2rem
          font-size .40rem
        .search-icon
          font-size .40rem
          color #fff
          padding 0 .2rem
  .fade-enter-active, 
  .fade-leave-active 
    transition opacity  0.5s cubic-bezier(0.04, 0.04, 0.12, 0.96)
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ 
    opacity 0
  .content-container-xs
    width 80%
    display flex
    flex-direction column
    margin 0 auto
    .content-list-xs
        .header-item-xs
          cursor: pointer
          font-size .40rem
          color rgba(255, 255, 255, 0.7)
          &:hover
            color #fff
          .item-desc-xs
            padding-left .1rem
          .categories-icon-xs
            font-size .34rem
            padding-left .2rem
      .header-input-xs
        margin-bottom .2rem
        width 100%
        height .86rem
        background-color rgba(255, 255, 255, 0.2)
        border-radius .1rem
        box-sizing border-box
        display flex
        align-items center
        justify-content space-between
        input
          background-color rgba(255, 255, 255, 0)
          color: #fff
          height 100%
          width 90%
          box-sizing border-box
          padding-left .2rem
          font-size .40rem
        .search-icon-xs
          font-size .40rem
          color #fff
          padding 0 .2rem
</style>
