<template>
  <div class="item-list">
    <router-link
      :to="'/' + nav.name"
      tag="div"
      @click.native="togglePanel($event, nav, index)"
      :ref="nav.name"
      :class="['item',currentIndex === index && current ? 'active' : '']"
      v-for="(nav, index) in navList" :key="nav._id"
    >
      <icon-svg :icon-class="nav.name"></icon-svg>
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
    navList: Array,
    showCategories: Boolean
  },
  mounted() {
    this.selfShowCategories = this.showCategories;
  },
  data() {
    return {
      selfShowCategories: false,
      currentIndex:0
    };
  },
  computed:{
    current(){
      return this.$route.path.indexOf(this.navList[this.currentIndex].name) > -1
    }
  },
  methods: {
    togglePanel(event, nav,index) {
      //阻止冒泡
      event || (event = window.event);
      event.stopPropagation
        ? event.stopPropagation()
        : (event.cancelBubble = true);
     if(nav.name === "Categories"){
        this.currentIndex = 0
        let isCategories = this.$refs.Categories[0].$el.contains(event.target);
        this.selfShowCategories && isCategories ? this.hide() : this.show();
     }else{
         this.currentIndex = index
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
      if (this.$refs.Categories[0] && !this.$refs.Categories[0].$el.contains(e.target)) {
        //点击除弹出层外的空白区域
        this.hide();
      }
    }
  },
 
  watch: {
    selfShowCategories() {
      if (this.selfShowCategories) {
        this.$refs.Categories[0].$el.style.color = "#fff";
      } else {
        this.$refs.Categories[0].$el.style.color = "rgba(255,255,255,0.7)";
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
.item-list
    display flex
    cursor: pointer
    font-size .36rem
    color rgba(255, 255, 255, 0.7)
    @media (max-width : 980px)
      flex-direction column
    .item
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
    .active
      color #fff !important
</style>
