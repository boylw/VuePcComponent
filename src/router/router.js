import Vue from 'vue';
import Router from 'vue-router';


// 路由组件引入

Vue.use(Router)

const router = new Router({
    mode: 'history',
    // base: '/pc/',
    routes: [{
        path: '/ui',
        name: 'index',
        component: () => import('@/page/ui.vue')
    },{
        path: '/userList',
        name: 'index',
        component: () => import('@/page/userList.vue'),
        children: [{
            path: 'userDetail/:id',
            name: 'userDetail',
            component: () => import('@/page/userDetail.vue')
        }]
    },{
        path: '/indexBanner',
        name: 'index',
        component: () => import('@/page/indexBanner.vue')
    }]
});

export default router;