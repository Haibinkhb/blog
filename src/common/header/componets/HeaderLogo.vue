<template>
  <div>
    <div class="header-logo">
      <router-link tag="span" to="/">shiro</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:"HeaderLogo"
};
</script>

<style lang="stylus" scoped>
.header-logo
  margin-right .2rem
  font-family SairaSemiCondensed-Bold
  font-size .56rem
  color #fff
  cursor pointer
  box-sizing border-box
</style>
