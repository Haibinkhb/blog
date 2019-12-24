<template>
  <div class="archive">
    <Title :title="title"></Title>
  </div>
</template>

<script>
import Title from "common/Title.vue";
export default {
  computed:{
    title(){
      let routePath = this.$route.path.split('/')
      return routePath[routePath.length - 1]
    }
  },
  components: {
    Title
  }
};
</script>

<style lang="stylus" scoped>

</style>
