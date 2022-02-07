import Vue from 'vue'
import App from './App.vue'
import store from '@/store'

// 引入swiper样式
import 'swiper/css/swiper.css'
//三级联动
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)


Vue.config.productionTip = false

import '@/mock/mockServe'

// 引入路由
import router from '@/router'
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
