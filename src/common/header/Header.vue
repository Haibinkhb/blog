<template>
  <div class="header">
    <div class="header-content">
      <div class="header-item" v-for="(nav, index) in navList" :key="index">
        <icon-svg class="header-icon" :icon-class="nav"></icon-svg>
        <span class="item-desc">{{ nav }}</span>
      </div>
      <div class="header-input">
        <input type="text" placeholder="Search">
        <icon-svg class="header-icon" :icon-class="search"></icon-svg>
      </div>
    </div>
  </div>
</template>

<script>
import IconSvg from "common/icon/IconSvg.vue";
export default {
  data() {
    return {
      navList: ["Home","Categories","Tags","Archive","About",]
    };
  },
  components: {
    IconSvg
  },
  computed: {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
.header
  width 100vw
  background-color $themeColor
  .header-content
    margin 0 auto
    max-width 80%
    line-height 1rem
    display flex
    justify-content space-evenly
    color rgba(255, 255, 255, 0.7)
    font-size .40rem
    padding .2rem
    text-align center
    .header-item
      flex 1
      .item-desc
        padding-left .1rem
  .header-input
    background-color rgba(255, 255, 255, 0.2)
    border-radius .1rem
    input 
      background-color rgba(255, 255, 255, 0)
      color: #fff
</style>
