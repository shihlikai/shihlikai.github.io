import Vue from 'vue'
import Router from 'vue-router'
import { checkAccessToken } from '@/assets/utils'

const { name } = require('@/app.config')

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/home'
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
          component: () => import('@/layouts/shop'),
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
          component: () => import('@/layouts/shop'),
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
      redirect: '/admin/product',
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
          path: 'product',
          redirect: '',
          component: () => import('@/layouts/admin/index'),
          children: [
            {
              path: '',
              meta: {
                title: '商品列表'
              },
              component: () => import('@/views/admin/product')
            }
          ]
        },
        {
          path: 'coupon',
          redirect: '',
          component: () => import('@/layouts/admin/index'),
          children: [
            {
              path: '',
              meta: {
                title: '優惠券列表'
              },
              component: () => import('@/views/admin/coupon')
            }
          ]
        },
        {
          path: 'order',
          redirect: '',
          component: () => import('@/layouts/admin/index'),
          children: [
            {
              path: '',
              meta: {
                title: '訂單列表'
              },
              component: () => import('@/views/admin/order')
            }
          ]
        },
        {
          path: 'picture',
          redirect: '',
          component: () => import('@/layouts/admin/index'),
          children: [
            {
              path: '',
              meta: {
                title: '圖片儲存列表'
              },
              component: () => import('@/views/admin/picture')
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
