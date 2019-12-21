<template>
  <router-link to="/" class="tag">
    {{ tag }}
  </router-link>
</template>

<script>
export default {
  props: {
    tag: String
  }
};
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
.tag
    cursor pointer
    box-sizing border-box
    background-color $themeColor
    padding .2rem
    color #fff
    font-size .34rem
    margin-right .2rem
    margin-top .2rem
    &:hover
      background-color #3e6db5
</style>
