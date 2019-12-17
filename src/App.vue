<template>
  <div id="app">
     <Header class="header" />
     <keep-alive>
        <router-view></router-view>
     </keep-alive>
  </div>
</template>

<script>
import Header from "page/header/Header.vue";
export default {
  name: "app",
  components: {
    Header
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
