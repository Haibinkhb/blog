<template>
  <div id="app">
   <Header  class="header"/>
   <Content class="content" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/content/Content.vue'
export default {
  name: 'app',
  components: {
    Header,
    Content
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}
</style>
