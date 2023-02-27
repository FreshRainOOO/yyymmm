const routes = [
  {
    path: "/da-blog/",
    name: "index",
    title: "首页",
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/da-blog/test",
    name: "test",
    title: "测试",
    component: () => import("@/views/test/index.vue"),
  },
  {
    path: "/da-blog/choose",
    name: "choose",
    title: "choose",
    component: () => import("@/views/test/list/index.vue"),
  },
];
export default routes;
