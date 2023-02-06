const routes = [
    {
        path: '/',
        name: 'index',
        title: '登录',
        component: () => import('../views/home/index.vue'), //.vue不能省略
    }
]
export  default routes
