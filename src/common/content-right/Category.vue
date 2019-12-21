<template>
  <div class="category border-top">
      {{category}}
  </div>
</template>

<script>
export default {
    props:{
        category:String
    }
}
</script>

<style lang="stylus" scoped>
.category
    color #2c2c2c
    font-size .38rem
    padding .4rem 0
    cursor pointer
    &:hover
        background-color rgba(0,0,0,.03)
</style>