<template>
  <div>
    i am about
  </div>
</template>

<script>
export default {
  components: {},
  beforeRouteLeave (to, from , next) {
    this.$emit('name',to.name)
    next()
}
};
</script>
