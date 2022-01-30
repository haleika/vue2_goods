import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

//重写vueRouter
const originPush = VueRouter.prototype.push
/**
 * 
 * @param {*} location 往哪里跳转
 * 
 */
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        //call||apply区别
        //相同点，都可以调用函数一次，都可以错该函数的上下文一次
        //不同点：call与apply传递参数：call传递参数用逗号隔开，apply传递数组
        originPush.call(this,location,resolve,reject)
    }
    else{
        originPush.call(this.location,()=>{},()=>{})
    }
}


export default new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        {
            path:"/home",
            component:Home,
            meta:{show:true}
        },
        {
            path:"/login",
            component:Login
        },
        {
            path:"/register",
            component:Register
        },
        {
            path:"/search",
            component:Search,
            meta:{show:true}
        },
    ]
})