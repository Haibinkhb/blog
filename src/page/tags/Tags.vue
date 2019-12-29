<template>
  <div class="tags">
    <Title :title="title"></Title>
    <tag-list></tag-list>
  </div>
</template>

<script>
import Title from "common/Title.vue";
import TagList from './componets/TagList'
export default {
  computed:{
    title(){
      let routePath = this.$route.path.split('/')
      return routePath[routePath.length - 1]
    }
  },
  components: {
    Title,
    TagList
  }
};
</script>

<style lang="stylus" scoped>

</style>
