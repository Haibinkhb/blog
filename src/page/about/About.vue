<template>
  <div class="archive">
    <Title :title="title"></Title>
  </div>
</template>

<script>
import Title from "common/Title.vue";
export default {
  data(){
    return {
      title:'About shiro kuang'
    }
  },
  components: {
    Title
  },
  beforeRouteLeave(to, from, next) {
    this.$emit("name", to.name);
    next();
  }
};
</script>

<style lang="stylus" scoped></style>
