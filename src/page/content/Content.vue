<template>
  <div class="content">
    <content-title></content-title>
    <div class="content-logs">
      <content-left ></content-left>
      <content-right ></content-right>
    </div>
  </div>
</template>

<script>
import ContentTitle from "./components/ContentTitle.vue";
import ContentLeft from "./components/ContentLeft";
import ContentRight from "./components/ContentRight";
export default {
  name: "home",
  components: {
    ContentTitle,
    ContentLeft,
    ContentRight
  }
};
</script>

<style lang="stylus" scoped>
.content 
  background-color #fff
  width 60%
  margin 0 auto
  .content-logs
    display flex
    justify-content space-between
</style>
