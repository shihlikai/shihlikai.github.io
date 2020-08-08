import Vue from 'vue'
import Router from 'vue-router'
import app from '@/app.config'

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
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log('frontend...')
  NProgress.start()
  document.title = `${(to.meta || {}).title || ''} - ${app.name}`
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
