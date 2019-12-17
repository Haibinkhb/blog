<template>
  <div @click="handleMenuClick">
    <icon-svg class="menu" icon-class="menu"></icon-svg>
  </div>
</template>

<script>
import IconSvg from "common/icon/IconSvg.vue";
export default {
    name:"HeaderMenu",
  components: {
    IconSvg
  },
  methods:{
      handleMenuClick(){
          this.$emit('menuclick')
      }
  }
};
</script>

<style lang="stylus" scoped>
.menu
    color #fff
    font-size .44rem
    @media (min-width : 980px)
        display none
</style>
