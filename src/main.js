import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import axios from 'axios'
import 'styles/border.css'
import 'styles/reset.css'
import 'assets/symbol.js'
Vue.config.productionTip = false
Vue.prototype.axios = axios
router.beforeEach((to, from, next) => {
  if (to.fullPath === "/Categories") {
    next(false)
  } else {
    next()
  }
})
router.afterEach(() => {
  window.scrollTo(0, 0);
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
