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
      redirect: '/home',
      component: () => import('@/layouts/view')
    },
    {
      path: '/home',
      component: () => import('@/layouts/home/index'),
      children: [
        {
          path: '',
          meta: {
            title: '首頁'
          },
          component: () => import('@/views/home')
        }
      ]
    },
    {
      path: '/shop',
      component: () => import('@/layouts/home/index'),
      redirect: '/shop/product',
      children: [
        {
          path: 'product',
          component: () => import('@/layouts/Shop'),
          children: [
            {
              path: '',
              meta: {
                title: '商品列表'
              },
              component: () => import('@/views/shop')
            }
          ]
        },
        {
          path: 'cart',
          component: () => import('@/layouts/Shop'),
          children: [
            {
              path: '',
              meta: {
                title: '購物車列表'
              },
              component: () => import('@/views/shop/cart')
            }
          ]
        }
      ]
      // component: () => import('@/layouts/Shop'),
      // children: [
      //   {
      //     path: '',
      //     meta: {
      //       title: '購物車列表'
      //     },
      //     component: () => import('@/views/shop')
      //   },
      //   {
      //     path: 'cart',
      //     meta: {
      //       title: '購物車列表'
      //     },
      //     component: () => import('@/views/shop/cart')
      //   }
      // ]
    },
    {
      path: '/about',
      component: () => import('@/layouts/home/index'),
      children: [
        {
          path: '',
          meta: {
            title: '關於我們'
          },
          component: () => import('@/views/about')
        }
      ]
    },
    {
      path: '/admin',
      component: () => import('@/layouts/view'),
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
          component: () => import('@/layouts/admin/index'),
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
