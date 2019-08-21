import Vue from 'vue';
import Router from 'vue-router';


// 路由组件引入

Vue.use(Router)

const router = new Router({
    mode: 'history',
    // base: '/pc/',
    routes: [{
        path: '/',
        name: 'index',
        component: () => import('@/components/routerComponent/ui.vue')
    }]
});

export default router;