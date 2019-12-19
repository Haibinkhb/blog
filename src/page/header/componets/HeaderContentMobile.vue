<template>
  <div class="content-container-xs">
    <header-item :showCategories="showCategories" :nav="nav" v-for="nav in navList" :key="nav._id"></header-item>
    <div class="header-input-xs">
      <input
        @focus="handleInputFocus"
        @blur="handleInputBlur"
        type="text"
        v-model="keyWord"
      />
      <div class="search-icon-xs">
        <icon-svg icon-class="search"></icon-svg>
      </div>
    </div>
  </div>
</template>

<script>
import IconSvg from "common/icon/IconSvg.vue";
import HeaderItem from "common/headerItem/HeaderItem";
export default {
  name: "HeaderContentMobile",
  props:{
    showCategories:Boolean
  },
  data() {
    return {
      keyWord: "Search",
      navList: [
        {
          _id: 1,
          name: "Categories",
          secMenu: true
        },
        {
          _id: 2,
          name: "Tags",
          secMenu: false
        },
        {
          _id: 3,
          name: "Archive",
          secMenu: false
        },
        {
          _id: 4,
          name: "About",
          secMenu: false
        }
      ]
    };
  },
  methods: {
    handleInputFocus() {
      this.keyWord = ""; // 清空占位字符
    },
    handleInputBlur() {
      this.keyWord = "Search"; // 还原占位符...（属实憨憨操作）
    }
  },
  components: {
    IconSvg,
    HeaderItem
  }
};
</script>

<style lang="stylus" scoped>
.content-container-xs
    width 88%
    display flex
    flex-direction column
    margin 0 auto
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
        font-size .38rem
      .search-icon-xs
        font-size .40rem
        color #fff
        padding 0 .2rem
</style>
