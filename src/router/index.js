import Vue from 'vue'
import Router from 'vue-router'
import { checkAccessToken } from '@/assets/utils'

const { name } = require('@/app.config')

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/product',
      component: () => import('@/layouts/index')
    },
    {
      path: '/product',
      meta: {
        title: '商品列表'
      },
      component: () => import('@/views/product/index')
    },
    {
      path: '/admin',
      component: () => import('@/layouts/admin'),
      children: [
        {
          path: 'login',
          meta: {
            title: '登入'
          },
          component: () => import('@/views/admin/login')
        },
        {
          path: '/',
          redirect: 'product',
          component: () => import('@/layouts/index'),
          children: [
            {
              path: 'product',
              meta: {
                title: '商品列表'
              },
              component: () => import('@/views/admin/product')
            }
          ]
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  let suffix = name
  if (to.path.startsWith('/admin')) {
    suffix = '後台管理平台'
    if (checkAccessToken()) {
      if (isAdminLoginPath()) {
        next('/admin/product')
      } else {
        next()
      }
    } else {
      if (isAdminLoginPath()) {
        next()
      } else {
        next('/admin/login')
      }
    }
  } else {
    next()
  }

  document.title = `${(to.meta || {}).title || ''} - ${suffix}`

  function isAdminLoginPath () {
    return to.path === '/admin/login'
  }
})
export default router
