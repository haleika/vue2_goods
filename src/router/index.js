import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'

Vue.use(VueRouter)

// import Home from '@/views/Home'
// import Login from '@/views/Login'
// import Register from '@/views/Register'
// import Search from '@/views/Search'

//重写vueRouter
const originPush = VueRouter.prototype.push
/**
 * 
 * @param {*} location 往哪里跳转
 * 
 */
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        //call||apply区别
        //相同点，都可以调用函数一次，都可以错该函数的上下文一次
        //不同点：call与apply传递参数：call传递参数用逗号隔开，apply传递数组
        originPush.call(this, location, resolve, reject)
    }
    else {
        originPush.call(this, location, () => { }, () => { })
    }
}


let router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
    },
})

router.beforeEach(async (to, from, next) => {
    //to要跳转到哪个路由的信息
    //from 从哪个路由来
    //next放行
    const token = store.state.user.token
    const name = store.state.user.userInfo.name
    if (token) {
        if (to.path == '/login') {
            next('/home')
        } else {
            if (name) {
                next()
            } else {
                try {
                    await store.dispatch("getUserInfo");
                    next()
                } catch {
                    // token失效
                    await store.dispatch("loginOut")
                    next('/login')
                }
            }
        }
    } else {
        next()
    }
})

export default router