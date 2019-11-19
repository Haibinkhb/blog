<template>
  <div>
    <router-link 
    tag="div" 
    :to="`/log/${log.id}`" 
    v-for="(log, index) in blogs" 
    :key="index"
    >
      <LogList :log="log"></LogList>
    </router-link>
  </div>
</template>

<script>
import LogList from "./LogList.vue";
import blogs from "./../../../assets/blog.json";
export default {
  data() {
    return {
      blogs
    };
  },
  components: {
    LogList
  }
};
</script>
