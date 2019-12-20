<template>
  <div class="content-logs">
      <router-link :to="'/'+log.id" class="log-title">{{log.title}}</router-link>
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
@import "~styles/mixins.styl"
.content-logs
  display flex
  flex-direction column
  justify-content space-between
  .log-title
    cursor: pointer
    color #2A579A
    font-size .40rem
    margin-bottom .4rem
  .log-desc
    font-size .34rem
    line-height .44rem
    overflow hidden
    text-overflow ellipsis
    display -webkit-box
    -webkit-line-clamp 2
    -webkit-box-orient vertical
</style>
