import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Guide',
        component: () => import('../views/Guide/index.vue'),
        children: [
            {
                path: '/',
                component: () => import('../views/Guide/Component/NavMain.vue'),
                alias: '/guide'
            },
            {
                path: '/photo',
                component: () => import('../views/Photo/index.vue'),

            },
            {
                path: '/guide/joinus',
                component: () => import('../views/Guide/Component/joinus.vue'),

            },
            {
                path: '/guide/login',
                component: () => import('../views/Guide/Component/login.vue'),
            },
            {
                path: '/guide/register',
                component: () => import('../views/Guide/Component/register.vue'),
            },
        ]
    },
    {
        path: '/photo',
        name:'Photo',
        component: () => import('../views/Photo/index.vue'),
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () => import('../views/Guide/index.vue'),
        children: [
            {
                path: '/',
                component: () => import('../views/Guide/Component/NavMain.vue'),
            },
            {
                path:'/blog/001',
                component: () => import('../views/blog/001.vue'),
            },
            {
                path:'/blog/002',
                component: () => import('../views/blog/002.vue'),
            },
            {
                path:'/blog/003',
                component: () => import('../views/blog/003.vue'),
            },
            {
                path:'/blog/004',
                component: () => import('../views/blog/004.vue'),
            },
            {
                path:'/blog/005',
                component: () => import('../views/blog/005.vue'),
            },
            {
                path:'/blog/006',
                component: () => import('../views/blog/006.vue'),
            },
            {
                path:'/blog/007',
                component: () => import('../views/blog/007.vue'),
            }
        ]
    },
    {
        path: '*',
        component: () => import('../views/Error/index.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
