import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Guide',

        component: () => import('../views/Guide/index.vue'),
        children: [
            {
                path: '/',
                component: () => import('../views/Guide/Component/Note.vue'),
            },
            {
                path: '/guide/joinus',
                component: () => import('../views/Guide/Component/joinus.vue'),
            },
            {
                path: '/guide/note',
                component: () => import('../views/Guide/Component/Note.vue'),
            },
            {
                path: '/guide/login',
                component: () => import('../views/Guide/Component/login.vue'),
            },
        ]
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
