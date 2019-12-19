import Vue from 'vue'
import VueRouter from 'vue-router'
import ContentLogs from 'page/content/components/content-left/ContentLogs.vue'
import Log from 'page/content/components/content-left/Log.vue'
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
            component: ContentLogs,
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
