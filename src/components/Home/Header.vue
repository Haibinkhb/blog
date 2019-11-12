<template>
  <div class="header">
    <div class="logo">Blog</div>
    <div class="nav">
      <ul class="nav-list">
        <li @click="handleSelect(index)" v-for="(nav,index) in navList" :key="index">
          <a href="#" :class="[currentIndex === index ? 'active' : '']" >{{nav}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        navList:['Home','About'],
        currentIndex:0
    };
  },
  computed: {
    // isActive() {
    //   return this.navList[activated]
    // }
  },
  methods: {
    handleSelect(index) {
      this.currentIndex = index
    }
  }
};
</script>

<style scoped>
.header {
  width: 100vw;
  height: 3rem;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #ccc;
}
.logo {
  flex: 1;
  color: #4c4c4c;
  text-align: center;
  font-size: 1.3rem;
}
.nav {
  flex: 3;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  height: 100%;
}
.nav-list {
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.nav-list li {
  height: 100%;
  line-height: 3rem;
}
.nav-list li a {
  text-decoration: none;
  color: #ccc;
  display: block;
  height: 100%;
}
.nav-list li .active{
    color: red;
    border-bottom: 2px solid red;
}
.nav-list li a:hover {
  color: red;
  border-bottom: 2px solid red;
}
</style>