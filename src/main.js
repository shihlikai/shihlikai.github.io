import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/icons'

import '@/assets/scss/reset.scss'
import 'element-ui/lib/theme-chalk/index.css'

import locale from 'element-ui/lib/locale/lang/zh-TW'
import ElementUI from 'element-ui'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import 'mdbvue/lib/css/mdb.min.css'
import 'mdbvue/lib'

import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import 'owl.carousel'

import 'jquery-sticky'

import '@/assets/css/style.css'

import * as mdbvue from 'mdbvue'

for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}

Vue.use(ElementUI, { locale })
Vue.filter('money', function (value) {
  return `$${value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`
})

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
