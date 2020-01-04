<template>
  <div >
      <router-link tag="div" class="link" to="/" >shiro</router-link>
  </div>
</template>

<script>
export default {
  name:"HeaderLogo",
  mounted(){
    
  }
};
</script>

<style lang="stylus" scoped>
  .link
    cursor pointer
    font-size .56rem
    white-space: nowrap;
    color: #fff
    background-color: transparent;
    transition: all .3s ease-in-out;
    &::after
      -moz-transform: translateX(-50px);
      -webkit-transform: translateX(-50px);
      content: '>';
      width 0
      transform: translateX(-50px);
      box-sizing: border-box
      -moz-transition: -moz-transform .3s,opacity .2s;
      -webkit-transition: -webkit-transform .3s,opacity .2s;
      color: #fff;
      display: inline-block;
      font-size: .40rem;
      opacity: 0;
      transition: transform .3s,opacity .2s;
    &::before
      width 0
      -moz-transform: translateX(50px);
      -webkit-transform: translateX(50px);
      content: '<';
      transform: translateX(50px);
      box-sizing: border-box
      -moz-transition: -moz-transform .3s,opacity .2s;
      -webkit-transition: -webkit-transform .3s,opacity .2s;
      color: #fff;
      display: inline-block;
      font-size: .40rem
      opacity: 0;
      transition: transform .3s,opacity .2s;
    &:hover
      outline: 0;
    &:hover::before
      opacity 1
      transform translateX(-0.33rem)
    &:hover::after
      opacity 1
      transform translateX(0.1rem)
</style>
