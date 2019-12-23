<template>
  <div class="categoriges">
    <ul>
      <li
        @click="changeRoute(categorgy)"
        v-for="(categorgy, index) in allCategories"
        :key="index"
      >
        {{ categorgy }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allCategories: ""
    };
  },
  mounted() {
    this.getBlogJson();
  },
  methods: {
    changeRoute(path) {
      this.$router.push({ path: `/Categories/${path}` });
    },
    getBlogJson() {
      this.axios.get("blog.json").then(this.getBlogJsonSucc);
    },
    getBlogJsonSucc(res) {
      res = res.data;
      if (res.ret) {
        this.allCategories = res.allCategories;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.categoriges
    width inherit
    position absolute
    z-index 1
    background-color $themeColor
    @media (max-width : 980px)
        position static
        box-shadow 0 6px 12px rgba(0,0,0,.175)
    ul
        display flex
        flex-direction column
        text-align left
        font-size $fontSize
        li
            font-size .36rem
            padding 0 .5rem
            box-sizing border-box
            &:hover
                background-color #3e6db5
</style>
