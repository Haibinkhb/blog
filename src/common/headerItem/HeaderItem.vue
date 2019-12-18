<template>
  <div class="header-item" :ref="nav.name" @click="handleItemClick(nav)">
        <router-link 
        :to="'/'+ nav.name"
        tag="div"
        class="router-link"
        >
          <icon-svg class="header-icon" :icon-class="nav.name"></icon-svg>
          <span class="item-desc">{{ nav.name }}</span>
          <icon-svg
            v-if="nav.secMenu"
            class="categories-icon"
            icon-class="sort-down"
          ></icon-svg>
          <div v-if="nav.secMenu" class="categories-icon"></div>
          <header-categories v-if="nav.secMenu && showCategories"></header-categories>
        </router-link>
      </div>
</template>

<script>
import IconSvg from "common/icon/IconSvg.vue";
import HeaderCategories from './HeaderCategories'
export default {
    props:{
        nav:Object
    },
    mounted() {
    this.clientWidth = `${document.documentElement.clientWidth}px`;
    // 监听 window 的 resize 事件
    window.onresize = this.throttle(() => {
      this.clientWidth = `${document.documentElement.clientWidth}px`;
      // 隐藏 HeaderContentMobile
      if (parseInt(this.clientWidth) > 963) { // 实测 963 最合适
        this.showCategories = false;
      }
    }, 50);
    },
    data(){
        return{
            showCategories:false
        }
    },
    methods:{
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
      }
      },
        handleItemClick(nav){
      if(nav.secMenu){
        this.showCategories = !this.showCategories
      }
    }
    },
    watch:{
    showCategories(){
      if(this.showCategories){
       this.$refs.Categories.style.color = "#fff"
      }else{
        this.$refs.Categories.style.color = "rgba(255,255,255,0.7)"
      }
    }
  },
    components:{
        HeaderCategories,
        IconSvg
    }
}
</script>

<style lang="stylus" scoped>
.header-item
    cursor: pointer
    font-size .40rem
    color rgba(255, 255, 255, 0.7)
    &:hover
      color #fff
    .router-link
      width 100%
      height 100%
      padding 0 .3rem
      @media (max-width : 980px)
        padding 0 !important
      .item-desc
          padding-left .1rem
      .categories-icon
          font-size .34rem
          padding-left .2rem
</style>