<template>
  <a :href="link.url" tag="div" class="links border">
      <span>
          <icon-svg :icon-class="link.iconClass"></icon-svg>
      </span> 
      <span>{{link.webSite}}</span>
      <span>-</span>
      <span>{{link.userName}}</span>
  </a>
</template>

<script>
import IconSvg from './../icon/IconSvg.vue'
export default {
props:{
    link:Object
},
components:{
    IconSvg
}
}
</script>

<style lang="stylus" scoped>
.links
    display flex
    justify-content left 
    align-items center
    width 100%
    padding .4rem
    box-sizing border-box
    flex-wrap wrap
    cursor pointer
    color #555
    &:hover
        background-color rgba(0,0,0,.03)
    span
        padding .1rem .05rem
        box-sizing border-box
</style>