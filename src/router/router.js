import Vue from 'vue'
import VueRouter from 'vue-router'

import Log from 'common/content/Log.vue'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path:'/:id',
            component:Log
        }
    ]
})   
