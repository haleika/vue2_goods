import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo } from '@/api'
import { setToken,getToken } from "@/utils/token"
//储存数据
const state = {
    code: "",
    token: getToken(),
    userInfo: {}
}
// 修改state的唯一手段
const mutations = {
    GETCODE(state, data) {
        state.code = data
    },
    USERLOGIN(state, data) {
        state.token = data
    },
    GETUSERINFO(state, data) {
        state.userInfo = data
    }
}
// 处理action，可以数学自己的业务逻辑，也可以处理异步
const actions = {
    async getCode({ commit }, phone) {
        let res = await reqGetCode(phone)
        console.log(res)
        if (res.code == 200) {
            commit("GETCODE", res.data)
        } else {
            return Promise.reject(new Error("fail"))
        }
    },
    // 用户注册
    async userRegister({ commit }, user) {
        let res = await reqUserRegister(user)
        console.log('-------res---------', res);
        if (res.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error("fail"))
        }
    },
    // 登录
    async userLogin({ commit }, user) {
        let res = await reqUserLogin(user)
        if (res.code == 200) {
            commit("USERLOGIN", res.data.token)
            // localStorage.setItem("TOKEN",res.data.token)
            setToken(res.data.token)
            return "ok"
        } else {
            return Promise.reject(new Error("fail"))
        }
    },
    // 获取用户信息
    async getUserInfo({ commit }) {
        let res = await reqUserInfo()
        if (res.code == 200) {
            commit("GETUSERINFO", res.data)
            return "ok"
        } else {
            return Promise.reject(new Error(res.message))
        }
    }
}
// 计算数学，用于简化仓库数据
const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}