import Vue from 'vue'
import App from './App.vue'
//三级联动
import TypeNav from '@/pages/Home/TypeNav'
Vue.component(TypeNav.name,TypeNav)


Vue.config.productionTip = false


import {reqCategoryList} from '@/api'

reqCategoryList()
// 引入路由
import router from '@/router'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
