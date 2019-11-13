<template>
  <div>
    <router-link tag="div" :to="'/ES6'">
      <LogList />
    </router-link>
  </div>
</template>

<script>
import LogList from "./LogList.vue";
export default {
  components: {
    LogList
  }
};
</script>
