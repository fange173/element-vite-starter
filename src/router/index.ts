import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router';

// 定义路由模块
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: 'home'
  },
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../pages/Home.vue'),
      },
      {
        path: 'page',
        name: 'Page',
        component: () => import('../pages/Page.vue'),
      },
    ],
  },
];

// 定义返回模块
const router = createRouter({
  history: createWebHistory('/cocom/'), // 设置为history模式，就是路径里面没有#,  createWebHashHistory 是默认的，括号里面的就是基础路径，可以理解为项目名称，就是请求路径的基础url
  routes,
});

export default router;
