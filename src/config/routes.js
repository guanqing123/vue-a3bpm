export default [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: () => import('../views/index.vue')
    },
    {
        path: '/todoList',
        component: () => import('../views/todoList.vue')
    },
    {
        path: '/bxcomp',
        name: 'bxcomp',
        component: () => import('../views/bxcomp.vue')
    },
    {
        path: '/zxcomp',
        name: 'zxcomp',
        component: () => import('../views/zxcomp.vue')
    },
    {
        path: '/zjcomp',
        name: 'zjcomp',
        component: () => import('../views/zjcomp.vue')
    }
]