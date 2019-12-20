<template>
  <span class="tag">
    {{ tag }}
  </span>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
.tag
    cursor: pointer
    background-color $themeColor
    padding .1rem .15rem
    color #fff
    font-size .34rem
    margin-right .4rem
    &:hover
      background-color #3e6db5
</style>
