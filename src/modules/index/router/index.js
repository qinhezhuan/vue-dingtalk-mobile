import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/home') // 路由懒加载
    },
    {
      path: '/outstore',
      name: 'outstore',
      component: () => import('../views/home/OutStore') // 路由懒加载
    },
    {
      path: '/no-permission',
      name: 'no-permission',
      component: () => import('../views/home/NoPermission') // 路由懒加载
    }
  ]
})
