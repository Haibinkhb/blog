<template>
  <router-link to="/" tag="div" class="links border">
      <span>
          <icon-svg :icon-class="link.iconClass"></icon-svg>
      </span> 
      <span>{{link.webSite}}</span>
      <span>-</span>
      <span>{{link.userName}}</span>
  </router-link>
</template>

<script>
import IconSvg from './icon/IconSvg.vue'
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
    justify-content center
    align-items center
    width 100%
    padding .2rem 0
    box-sizing border-box
    flex-wrap wrap
    span
        padding .1rem .05rem
        box-sizing border-box
</style>