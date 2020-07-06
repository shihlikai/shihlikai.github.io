import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/admin',
      component: () => import('@/layouts/index')
    },
    {
      path: '/product',
      component: () => import('@/views/product/index')
    },
    {
      path: '/admin',
      redirect: 'admin/product',
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
})
