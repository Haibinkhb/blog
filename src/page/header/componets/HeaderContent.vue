<template>
  <div class="content-container">
    <header-item :showCategories="showCategories" :navList="navList" ></header-item>
    <header-search></header-search>
  </div>
</template>

<script>
import HeaderSearch from './HeaderSearch'
import HeaderItem from 'common/headerItem/HeaderItem'
export default {
    name:"HeaderContent",
    props:{
      showCategories:Boolean
    },
    data() {
    return {
      clientWidth:0,
      navList: [{
        _id:1,
        name:"Categories",
        secMenu:true
      }, {
        _id:2,
        name:"Tags",
        secMenu:false
      },{
        _id:3,
        name:"Archive",
        secMenu:false
      },{
        _id:4,
        name:"About",
        secMenu:false
      }]
    };
  },
  components: {
    HeaderItem,
    HeaderSearch
  }
};
</script>

<style lang="stylus" scoped>
.content-container
      flex 1
      display flex
      justify-content space-between
      align-items center
      margin-left 1rem
      text-align center
      @media (max-width : 980px)
        display none !important
</style>
