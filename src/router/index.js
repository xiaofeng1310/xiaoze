import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/framework/login'
import success from '@/components/successful/index'
import Dashboard from '@/components/dashboard/index'
import Widget from '@/components/dashboard/widget'
import Panels from '@/components/dashboard/panels'
import Permission from '@/components/dashboard/permission'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/success',
      name: 'success',
      component: success,
      children: [
        {
          path: '/',
          redirect: 'dashboard/index'
        },
        {
          path: 'dashboard/index',
          name: '首页',
          component: Dashboard
        },
        {
          path: 'widget/index',
          name: '控件',
          component: Widget
        },
        {
          path: 'panels/index',
          name: '卡片展示',
          component: Panels
        },
        {
          path: 'permission/index',
          name: '权限控制',
          component: Permission
        }
      ]
    }
  ]
})

var routeList = ''

router.beforeEach((to, from, next) => {
  routeList = to.name
  to.meta.routeList = routeList
  next()
})

export default router
