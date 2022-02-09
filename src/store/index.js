
import Vue from "vue";
import Vuex from 'vuex'


Vue.use(Vuex);

import home from './home'
import search from './search'
import detail from './detail'
import shopCar from './shopCar'

// 对外暴露

export default new Vuex.Store({
    modules:{
        home,
        search,
        detail,
        shopCar
    }
})