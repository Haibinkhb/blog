<template>
  <div class="content">
    <div class="title">{{ log.title }}</div>
    <div class="logInfo">
      <span>发表于{{log.updatedAt}}</span>
      <span>字数统计</span>
      <span>标签{{log.layout}}</span>
    </div>
    <div v-html="log.body">
       
    </div>
  </div>
</template>

<script>

export default {
  props: { log: Object },

  data() {
    return {
      params: this.$route.params,
    };
  },
  components: {
    // Log
  }
};
</script>

<style scoped>
.content {
  background-color: orange;
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 20rem;
  margin: 2rem auto;
  box-shadow: 0px 0px 10px #ccc;
  border-radius: 0.5rem;
  padding: 2rem 1rem;
}
.logInfo {
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
}
</style>
