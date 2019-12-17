<template>
  <div class="content-container">
    <div class="content-list">
      <div class="header-item" v-for="(nav, index) in navList" :key="index">
        <icon-svg class="header-icon" :icon-class="nav"></icon-svg>
        <span class="item-desc">{{ nav }}</span>
        <icon-svg
          v-if="nav === 'Categories'"
          class="categories-icon"
          icon-class="sort-down"
        ></icon-svg>
        <div v-if="nav === 'Categories'" class="categories-"></div>
      </div>
    </div>
    <div class="header-input">
      <input type="text" v-model="keyWord" />
      <div class="search-icon">
        <icon-svg icon-class="search"></icon-svg>
      </div>
    </div>
  </div>
</template>

<script>
import IconSvg from "common/icon/IconSvg.vue";
export default {
    name:"HeaderContent",
    data() {
    return {
      keyWord: "Search",
      navList: ["Categories", "Tags", "Archive", "About"]
    };
  },
  components: {
    IconSvg
  }
};
</script>

<style lang="stylus" scoped>
.content-container
      flex 1
      display flex
      justify-content space-between
      align-items center
      padding 0 .2rem
      text-align center
      @media (max-width : 980px)
        display none !important
      .content-list
        display flex
        justify-content space-evenly
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
        margin .15rem 0
        width 26%
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
</style>
