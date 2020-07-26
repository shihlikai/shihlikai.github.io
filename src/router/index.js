import Vue from 'vue'
import Router from 'vue-router'
import { checkAccessToken } from '@/assets/utils'
const { name } = require('@/app.config')

// const originalPush = Router.prototype.push
// Router.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }

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
            name: '登入'
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
                name: '商品列表'
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
  document.title = (to.meta || {}).title || name

  if (to.path.startsWith('/admin')) {
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

  function isAdminLoginPath () {
    return to.path === '/admin/login'
  }
})
export default router
