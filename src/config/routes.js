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
    }
]