const routes = [
    {
        path: '/home',
        name: 'index',
        title: '登录',
        component: () => import('../views/home/index.vue'), //.vue不能省略
    },
    {
        path: '/test',
        name: 'test',
        title: '测试',
        component: () => import('../views/test/index.vue'), //.vue不能省略
    }
]
export default routes
