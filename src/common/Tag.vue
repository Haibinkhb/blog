<template>
  <span @click="changeRoute"  class="tag">
    {{ tag }}
  </span>
</template>

<script>
export default {
  props: {
    tag: String
  },
  methods:{
     changeRoute() {
      this.$router.push({ path: `/Tags/list/${this.tag}` });
    }
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
