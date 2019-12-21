<template>
  <div class="content-right">
    <router-link class="info-container" tag="div" to="/about">
      <div class="bg"></div>
      <div class="info-photo">
        <img src="~assets/logo.jpg" alt />
        <span class="logo">shiro</span>
        <span class="self-desc">前端小白</span>
      </div>
      <div class="about">About</div>
    </router-link>
    <div class="card-list">
      <common-card
        v-for="card in cardList"
        :key="card.id"
        :card="card"
      ></common-card>
    </div>
  </div>
</template>

<script>
import CommonCard from "common/CommonCard.vue";
export default {
  props: {
    cardList:Array
  },
  data() {
    return {
     
    };
  },
  components: {
    CommonCard
  }
};
</script>

<style lang="stylus" scoped>
.content-right
  width 20%
  .info-container
    width 100%
    position relative
    background-color #fafafa
    border-radius 3px
    overflow hidden
    border-radius .1rem
    margin-top .4rem
    .bg
      box-sizing border-box
      width 100%
      height 6rem
      background-image url("~assets/logo.jpg")
      background-repeat no-repeat
      background-position center
      background-size percentage(1.3%)
      filter blur(.25rem)
    .info-photo
      width 100%
      height 6rem
      position absolute
      left 0
      top 0
      display flex
      flex-direction column
      justify-content center
      align-items center
      img
        width 45%
        border 5px solid rgba(0,0,0,.3)
        border-radius 50%
        cursor pointer
      .logo
        font-size .66rem
        color rgba(0,0,0,.8)
        margin-top .2rem
      .self-desc
        margin-top .2rem
        color rgba(0,0,0,.5)
        font-size .44rem
    .about
      padding .3rem 0
      text-align center
      font-size .44rem
      background-color #28a745
      color #fff
      cursor pointer
      &:hover
        background-color #218838
  .card-list
    display flex
    flex-direction column
</style>
