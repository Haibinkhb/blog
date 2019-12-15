import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import axios from 'axios'
import 'styles/border.css'
import 'styles/reset.css'
import 'assets/symbol.js'
Vue.config.productionTip = false
Vue.prototype.axios = axios
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
