import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/framework/login'
import success from '@/components/successful/index'
import Dashboard from '@/components/dashboard/index'
import Widget from '@/components/dashboard/widget'
import Panels from '@/components/dashboard/panels'
import Permission from '@/components/dashboard/permission'

Vue.use(Router)

export default new Router({
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
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: 'widget/index',
          name: 'widget',
          component: Widget
        },
        {
          path: 'panels/index',
          name: 'panels',
          component: Panels
        },
        {
          path: 'permission/index',
          name: 'permission',
          component: Permission
        }
      ]
    }
  ]
})
