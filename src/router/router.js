import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'page/home/Home.vue'
import Log from 'page/home/componets/HomeLog.vue'
import About from 'page/about/About.vue'
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
