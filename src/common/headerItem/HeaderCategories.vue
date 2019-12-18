<template>
  <div class="categoriges">
     <ul>
         <li>JavaScript</li>
         <li>ES6</li>
         <li>Vue</li>
     </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.categoriges
    
    position absolute
    z-index 1
    background-color $themeColor
    @media (max-width : 980px)
        position static
        box-shadow 0 6px 12px rgba(0,0,0,.175)
    ul
        display flex
        flex-direction column
        text-align left 
        font-size $fontSize
        li
            font-size .40rem
            padding 0 .5rem
            box-sizing border-box
            &:hover
                background-color #3e6db5
</style>