<template>
<div>
<router-link
    tag="div"
    :to="`/home/${log.id}`"
    v-for="(log, index) in blogs"
    :key = "index"
  >
    <div class="content">
      <h3 class="title">{{ log.title}}</h3>
      <div class="logInfo">
        <span>发表于：{{ log.updatedAt }}</span>
        <span>字数统计：{{ log.wordcount }}</span>
        <span>标签：{{ log.tag }}</span>
      </div>
    </div>
  </router-link>
</div>
</template>

<script>
import blogs from "./../../../assets/blog.json";
export default {
  data() {
    return {
      blogs
    };
  }
};
</script>

<style scoped>
.content {
  background-color: fff;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 2rem auto;
  box-shadow: 0px 0px 10px #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
}
.logInfo {
  margin: 1rem 0;
  display: flex;
  justify-content: space-evenly;
}
.title {
  text-align: center;
}
</style>
