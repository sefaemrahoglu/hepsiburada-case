import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            name: 'list',
            path: '/',
            component: () => import('@/pages/listPage'),
        },
        {
            name: 'form',
            path: '/add-connection',
            component: () => import('@/pages/formPage'),
        },
    ]
})