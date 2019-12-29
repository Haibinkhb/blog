<template>
  <div class="header-input">
    <div class="header-input-container">
      <input
        type="text"
        v-model="keyWord"
        placeholder="Search"
        @focus="handleInputFocus"
        @blur="handleInputBlur"
      />
      <div class="search-icon" @click="handleSearchClick">
        <icon-svg icon-class="search"></icon-svg>
      </div>
    </div>
    <div class="search-content" v-show="showSearchContent">
      <div
        class="search-content-item"
        v-for="(item, index) in searchList"
        :key="index"
        @click="changeRouter(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import IconSvg from "common/icon/IconSvg.vue";
export default {
  data() {
    return {
      keyWord: "",
      searchList: [],
      showSearchContent: false
    };
  },
  mounted() {
    if (localStorage.searchList) {
      this.searchList = localStorage.searchList.split(",");
    }
  },
  watch: {
    searchList(newvalue) {
      localStorage.searchList = newvalue;
    }
  },
  methods: {
    handleSearchClick() {
      if (this.searchList.length >= 6) {
        this.searchList.pop();
      }
      this.searchList.unshift(this.keyWord);
      this.$router.push({ path: `/Search/${this.keyWord}`});
    },
    handleInputFocus() {
      this.showSearchContent = true;
    },
    handleInputBlur() {
      this.showSearchContent = false;
    },
    changeRouter(path){
      this.$route.push({ path: `/Search/${path}`});
    }
  },
  components: {
    IconSvg
  }
};
</script>

<style lang="stylus" scoped>
.header-input
    margin .15rem 0
    width 26%
    position relative
    @media (max-width : 980px)
        width 100% !important
    .header-input-container
      width 100%
      background-color rgba(255, 255, 255, 0.2)
      border-radius .1rem
      box-sizing border-box
      display flex
      align-items center
      justify-content space-between
      height .86rem
      line-height .86rem
      input
        background-color rgba(255, 255, 255, 0)
        color: #fff
        height 100%
        width 90%
        box-sizing border-box
        padding-left .2rem
        font-size .38rem
      ::-moz-placeholder { color: #fff; }
      ::-webkit-input-placeholder { color:#fff; }
      :-ms-input-placeholder { color:#fff; }
      .search-icon
        height 100%
        font-size .40rem
        color #fff
        padding 0 .2rem
    .search-content
      color #555
      z-index 2
      width 100%
      background-color #fff
      position absolute
      border-radius .1rem
      .search-content-item
        box-sizing border-box
        border-radius .1rem
        width 100%
        padding-left .2rem
        text-align left
        font-size .30rem
        color #555
        &:hover
          background-color #ccc
</style>
