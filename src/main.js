import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
//三级联动
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)


Vue.config.productionTip = false


// 引入路由
import router from '@/router'
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
