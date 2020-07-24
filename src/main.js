import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/icons'

import '@/assets/scss/reset.scss'
import 'element-ui/lib/theme-chalk/index.css'

import locale from 'element-ui/lib/locale/lang/zh-TW'
import ElementUI from 'element-ui'

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
