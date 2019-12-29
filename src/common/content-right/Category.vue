<template>
  <div 
    class="category border-top"
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
.category
    color #555
    font-size .38rem
    padding .4rem 0
    cursor pointer
    &:hover
        background-color rgba(0,0,0,.03)
</style>