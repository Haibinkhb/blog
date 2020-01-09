<template>
  <div class="archive">
    <Title :title="title"></Title>
    <about-description></about-description>
  </div>
</template>

<script>
import Title from "common/Title.vue";
import AboutDescription from './components/AboutDescription.vue'
export default {
  data(){
    return {
      title:'About shiro kuang'
    }
  },
  components: {
    Title,
    AboutDescription
  },
  beforeRouteLeave(to, from, next) {
    this.$emit("name", to.name);
    next();
  }
};
</script>

<style lang="stylus" scoped>
.archive
  width 100%
</style>
