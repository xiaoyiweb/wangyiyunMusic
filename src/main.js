import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import musicItem from '@/components/musicItem'
Vue.component('musicItem',musicItem)

// Vant部分
import '@/utils/vant'

// 路由部分
import {router} from '@/router'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')