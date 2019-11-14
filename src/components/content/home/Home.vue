<template>
  <div>
    <router-link 
    tag="div" 
    :to="`/log/${log.id}`" 
    v-for="(log, index) in logList" 
    :key="index"
    >
    
      <LogList :log="log"></LogList>
    </router-link>
  </div>
</template>

<script>
import LogList from "./LogList.vue";
import test from './../../../../public/blogJson/test.json'
export default {
  data() {
    return {
      logList: [test,test]
    };
  },
  components: {
    LogList
  }
};
</script>
