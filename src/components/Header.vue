<template>
  <div class="header">
    <div class="nav">
      <ul class="nav-list">
        <li ref="li" v-for="(nav, index) in navList" :key="index">
          <router-link
            :to="`/${nav}`"
            :class="[currented(nav) ? 'active' : '']"
            >{{ nav }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: ["home", "about"]
    };
  },
  computed: {},
  methods: {
    currented(nav) {
      return this.$route.name === nav || this.$route.path.indexOf(nav) !== -1;
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
  color: #2c3e50;
  display: block;
  height: 100%;
}
.nav-list li .active {
  color: #2c3e50;
  border-bottom: 2px solid #42b983;
}
.nav-list li a:hover {
  color: #2c3e50;
  border-bottom: 2px solid #42b983;
}
</style>
