<template>
  <div>
    <transition-group name="fade" appear>
      <router-link
        tag="div"
        :to="`/home/${log.id}`"
        v-for="log in blogs"
        :key="log._id"
        v-show="blogs.length"
      >
        <div class="content">
          <h3 class="title">{{ log.title }}</h3>
          <div class="logInfo">
            <span>发表于：{{ log.updatedAt }}</span>
            <span>字数统计：{{ log.wordcount }}</span>
            <span>标签：{{ log.tag }}</span>
          </div>
        </div>
      </router-link>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: []
    };
  },
  mounted() {
    this.getBlogJson();
  },
  methods: {
    getBlogJson() {
      this.axios.get('blog.json')
        .then(this.getBlogJsonSucc);
    },
    getBlogJsonSucc(res) {
      this.blogs = res.data;
    }
  }
};
</script>

<style scoped>
.fade-enter,
.fade-levae-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
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
