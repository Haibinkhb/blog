<template>
  <div class="content-container-xs">
    <div class="content-list-xs">
      <div @click="handleItemClick(nav)" :ref="nav" class="header-item-xs" v-for="(nav, index) in navList" :key="index">
        <icon-svg class="header-icon-xs" :icon-class="nav"></icon-svg>
        <span class="item-desc-xs">{{ nav }}</span>
        <icon-svg
          v-if="nav === 'Categories'"
          class="categories-icon-xs"
          icon-class="sort-down"
        ></icon-svg>
        <header-categories v-if="nav === 'Categories' && showCategories"></header-categories>
      </div>
    </div>
    <div class="header-input-xs">
      <input type="text" v-model="keyWord" />
      <div class="search-icon-xs">
        <icon-svg icon-class="search"></icon-svg>
      </div>
    </div>
  </div>
</template>

<script>
import IconSvg from "common/icon/IconSvg.vue";
import HeaderCategories from './HeaderCategories'
export default {
    name:"HeaderContentMobile",
  data() {
    return {
      keyWord: "Search",
      navList: ["Categories", "Tags", "Archive", "About"],
      showCategories:false
    };
  },
  methods:{
    handleItemClick(nav){
      if(nav === "Categories"){
        this.showCategories = !this.showCategories
      }
    }
  },
  watch:{
    showCategories(){
      if(this.showCategories){
       this.$refs.Categories[0].style.color = "#fff"
      }else{
        this.$refs.Categories[0].style.color = "rgba(255,255,255,0.7)"
      }
    }
  },
  components: {
    IconSvg,
    HeaderCategories
  }
};
</script>

<style lang="stylus" scoped>
.content-container-xs
    width 90%
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
