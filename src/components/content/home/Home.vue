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
export default {
  data() {
    return {
      logList: [{id:'es6', title: "你不知道的JavaScript" }, {id:'es7', title: "防抖节流实现" }]
    };
  },
  components: {
    LogList
  }
};
</script>
