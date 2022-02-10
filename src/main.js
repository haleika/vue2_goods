import Vue from 'vue'
import App from './App.vue'
import store from '@/store'

// 引入swiper样式
import 'swiper/css/swiper.css'
//三级联动
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)

import { MessageBox } from 'element-ui';
// Vue.component(Message.name, Message);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;


import * as API from '@/api'

Vue.config.productionTip = false

import '@/mock/mockServe'

// 引入路由
import router from '@/router'
new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  }
}).$mount('#app')
