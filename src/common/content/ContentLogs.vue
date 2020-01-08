<template>
  <div class="content-logs">
      <router-link :to="'/Logs/'+log.id" class="log-title">{{log.title}}</router-link>
      <div class="log-desc">{{log.desc}}</div>
  </div>
</template>

<script>

export default {
  props:{
    log:Object
  },
  data() {
    return {

    }
  },
  components:{

  }
};
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
.content-logs
  display flex
  flex-direction column
  justify-content space-between
  .log-title
    cursor: pointer
    color $themeColor
    font-size .40rem
    margin-bottom .4rem
  .log-desc
    font-size .34rem
    line-height .48rem
    overflow hidden
    text-overflow ellipsis
    display -webkit-box
    -webkit-line-clamp 3
    -webkit-box-orient vertical
</style>
