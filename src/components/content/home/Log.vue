<template>
  <div class="content" v-html="log.body">

  </div>
</template>

<script>
import blogs from './../../../../public/blogJson/blog.json'
export default {
  data(){
    return {
      blogs
    }
  },
  computed: {
    log(){
      return this.blogs.find(item =>{
         return item.id === this.$route.params.id
      })
    }
  }
};
</script>

<style scoped>

</style>
