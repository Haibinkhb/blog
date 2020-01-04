import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import axios from 'axios'
import 'styles/border.css'
import 'styles/reset.css'
import 'assets/symbol.js'
import FastClick from 'fastclick'

FastClick.attach(document.body);

Vue.config.productionTip = false
Vue.prototype.axios = axios
// 取消 /Categories 的路由跳转
router.beforeEach((to, from, next) => {
  if (to.fullPath === "/Categories") {
    next(false)
  } else {
    next()
  }
})
// 路由跳转后滑动到顶部
router.afterEach(() => {
  window.scrollTo(0, 0);
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
