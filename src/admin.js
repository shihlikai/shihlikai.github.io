import Vue from 'vue'
import App from './App.vue'
import router from './router/admin'
import store from './store'

import '@/icons'

import '@/assets/scss/reset.scss'
import 'element-ui/lib/theme-chalk/index.css'

import locale from 'element-ui/lib/locale/lang/zh-TW'
import ElementUI from 'element-ui'

Vue.use(ElementUI, { locale })
Vue.filter('money', function (value) {
  return `$${value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`
})

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faHome, faAngleRight, faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// library.add(faHome, faAngleRight, faShoppingCart, faTrashAlt)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
