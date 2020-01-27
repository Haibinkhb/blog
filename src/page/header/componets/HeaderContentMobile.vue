<template>
  <div class="content-container-xs">
    <header-item :showCategories="showCategories" :navList="navList"></header-item>
    <header-search></header-search>
  </div>
</template>

<script>
import HeaderItem from "common/headerItem/HeaderItem";
import HeaderSearch from './HeaderSearch'
export default {
  name: "HeaderContentMobile",
  props:{
    showCategories:Boolean
  },
  data() {
    return {
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
  components: {
    HeaderItem,
    HeaderSearch
  }
};
</script>

<style lang="stylus" scoped>
.content-container-xs
    width 88%
    // height 100vh
    display flex
    flex-direction column
    margin 0 auto
</style>
