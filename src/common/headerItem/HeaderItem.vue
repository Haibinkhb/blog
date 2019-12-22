<template>
  <div class="header-item">
    <router-link
      :to="'/' + nav.name"
      tag="div"
      @click.native="togglePanel($event, nav)"
      :ref="nav.name"
      class="router-link"
    >
      <icon-svg class="header-icon" :icon-class="nav.name"></icon-svg>
      <span class="item-desc">{{ nav.name }}</span>
      <icon-svg
        v-if="nav.secMenu"
        class="categories-icon"
        icon-class="sort-down"
      ></icon-svg>
      <header-categories
        v-if="nav.secMenu && selfShowCategories"
      ></header-categories>
    </router-link>
  </div>
</template>

<script>
import IconSvg from "common/icon/IconSvg.vue";
import HeaderCategories from "./HeaderCategories";
export default {
  props: {
    nav: Object,
    showCategories: Boolean
  },
  mounted() {
    this.selfShowCategories = this.showCategories;
  },
  data() {
    return {
      selfShowCategories: false
    };
  },
  methods: {
    togglePanel(event, nav) {
      //阻止冒泡
      event || (event = window.event);
      event.stopPropagation
        ? event.stopPropagation()
        : (event.cancelBubble = true);
     if(nav.name === "Categories"){
        let isCategories = this.$refs.Categories.$el.contains(event.target);
        this.selfShowCategories && isCategories ? this.hide() : this.show();
     }else{
       return
      //  this.$refs[nav.name].$el.style.color = "#fff"
     } 
    },
    show() {
      this.selfShowCategories = true;
      document.addEventListener("click", this.hidePanel, false);
    },
    hide() {
      this.selfShowCategories = false;
      document.removeEventListener("click", this.hidePanel, false);
    },
    hidePanel(e) {
      // 判断点击的元素是否是弹出层的后代元素
      if (this.$refs.Categories.$el && !this.$refs.Categories.$el.contains(e.target)) {
        //点击除弹出层外的空白区域
        this.hide();
      }
    }
  },
 
  watch: {
    selfShowCategories() {
      if (this.selfShowCategories) {
        this.$refs.Categories.$el.style.color = "#fff";
      } else {
        this.$refs.Categories.$el.style.color = "rgba(255,255,255,0.7)";
      }
    }
  },
  components: {
    HeaderCategories,
    IconSvg
  }
};
</script>

<style lang="stylus" scoped>
.header-item
    cursor: pointer
    font-size .36rem
    color rgba(255, 255, 255, 0.7)
    .router-link
      padding 0 .3rem
      &:hover
        color #fff !important
      @media (max-width : 980px)
        padding 0 !important
      .item-desc
          padding-left .1rem
      .categories-icon
          font-size .34rem
          padding-left .2rem
</style>
