<template>
  <div class="content-title border-bottom">
      <h3>All Posts</h3>
      <span>({{count}})</span>
  </div>
</template>

<script>
export default {
props:{
  count:Number
}
}
</script>

<style lang="stylus" scoped>
.content-title
    display flex
    padding .4rem 0
    align-items center
    h3
      font-size .54rem
      margin-right .2rem
    span
      font-size .36rem
</style>