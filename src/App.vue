<template>
  <div id="app">
     <Header class="header" />
     <Content />
  </div>
</template>

<script>
import Header from "page/header/Header.vue";
import Content from "page/content/Content.vue";
export default {
  name: "app",
  components: {
    Header,
    Content
  }
};
</script>

<style>
#app {
  font-family: Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  width: 100vw;
}
</style>
