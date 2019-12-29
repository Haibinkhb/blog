import Vue from 'vue'
import VueRouter from 'vue-router'
import About from 'page/about/About.vue'
import Tags from 'page/tags/Tags.vue'
import Archive from 'page/archive/Archive.vue'
import FilterArticle from 'common/FilterArticle'
import Log from 'common/content/Log.vue'
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
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
            path: '/Search/:id',
            component: FilterArticle
        },
        {
            path:'/Categories/:id',
            component: FilterArticle
        },
        {
            path: '/Tags/list/:id',
            component: FilterArticle
        },
        {
            path: '/:id',
            component: Log
        }
    ]
})   
