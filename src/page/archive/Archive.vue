<template>
  <div class="archive">
    <Title :title="title"></Title>
    <archive-time-line></archive-time-line>
  </div>
</template>

<script>
import Title from "common/Title.vue";
import ArchiveTimeLine from "./compnents/ArchiveTimeLine.vue"
export default {
  computed:{
    title(){
      let routePath = this.$route.path.split('/')
      return routePath[routePath.length - 1]
    }
  },
  components: {
    Title,
    ArchiveTimeLine
  }
};
</script>

<style lang="stylus" scoped>

</style>
