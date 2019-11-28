import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../components/content/home/Home.vue'
import About from './../components/content/about/About.vue'
import Log from './../components/content/home/Log.vue'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            name:'home',
            component: Home,
        },
        {
            path: '/home/:id',
            component: Log,
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})   
