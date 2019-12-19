<template>
  <div class="article-date">
      <div class="day">19</div>
      <div class="month">十二</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
.article-date
    display flex
    flex-direction column
    text-align center
    width 1.2rem
    font-weight 900
    .day
        border .03rem solid $themeColor
        font-size .54rem
        padding .2rem 0
        color $themeColor
        box-sizing border-box
    .month
        box-sizing border-box
        padding .1rem 0
        font-size .38rem
        color #fff
        background-color $themeColor
</style>
