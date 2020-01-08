<template>
  <div 
    @click="changeRoute(category)"
  >
      {{category}}
  </div>
</template>

<script>
export default {
    props:{
        category:String
    },
    methods:{
        changeRoute(path){
            this.$router.push({ path: `/Categories/${path}` });
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>