import Vue from 'vue'
import VueRouter from 'vue-router'
import About from 'page/about/About.vue'
import Tags from 'page/tags/Tags.vue'
import Archive from 'page/archive/Archive.vue'
import Log from 'common/content/Log.vue'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/Tags',
            component: Tags
        },
        {
            path: '/Archive',
            component: Archive
        },
        {
            path: '/About',
            component: About
        },
        {
            path: '/:id',
            component: Log
        }
    ]
})   
