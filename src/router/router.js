import Vue from 'vue'
import VueRouter from 'vue-router'
import About from 'page/about/About.vue'
import Tags from 'page/tags/Tags.vue'
import Archive from 'page/archive/Archive.vue'
import FilterArticle from 'common/FilterArticle'
import LogContent from 'common/content/LogContent.vue'

// 解决路由报 Uncaught (in promise) undefined 错误
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
            path: '/Archive/:id',
            component: FilterArticle,
            children:[{
                path:':token',
                component: FilterArticle
            }]
        },
        {
            path: '/Logs/:id',
            component: LogContent
        }
    ]
})   
