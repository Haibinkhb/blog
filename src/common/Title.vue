<template>
  <div class="title border-bottom">
      <div>{{title}}</div>
  </div>
</template>

<script>
export default {
props:{
    title:String
}
}
</script>

<style lang="stylus" scoped>
.title
    padding .4rem 0
    font-size .54rem
</style>