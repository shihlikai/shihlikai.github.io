import Vue from 'vue'
import Router from 'vue-router'
import { checkAccessToken } from '@/assets/utils'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false }) // NProgress Configuration

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/product'
    },
    {
      path: '/login',
      meta: {
        title: '登入'
      },
      component: () => import('@/views/admin/login')
    },
    {
      path: '/product',
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
      path: '/coupon',
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
      path: '/order',
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
      path: '/picture',
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
    },
    {
      path: '/frontend',
      redirect: (to) => {
        window.location.href = 'index.html'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log('backend...')
  NProgress.start()
  const suffix = '後台管理平台'
  if (checkAccessToken()) {
    if (isAdminLoginPath()) {
      next('/product')
    } else {
      next()
    }
  } else {
    if (isAdminLoginPath()) {
      next()
    } else {
      next('/login')
    }
  }

  document.title = `${(to.meta || {}).title || ''} - ${suffix}`

  function isAdminLoginPath () {
    return to.path === '/login'
  }
})
router.afterEach(() => {
  NProgress.done()
})

export default router
