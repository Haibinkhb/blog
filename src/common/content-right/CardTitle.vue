<template>
  <div class="card-title">
      {{header}}
  </div>
</template>

<script>
export default {
props:{
    header:String
}
}
</script>

<style lang="stylus" scoped>
.card-title
    color #2c2c2c
    font-size .38rem
    background-color rgba(0,0,0,.03)
    padding .4rem 0
</style>