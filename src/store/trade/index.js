import { reqAddressInfo,reqOrderInfo } from '@/api'

//储存数据
const state = {
    address:[],
    orderInfo:{}
}
// 修改state的唯一手段
const mutations = {
    GETUSERADDRESS(state,data){
        state.address = data
    },
    GETORDERINFO(state,data){
        state.orderInfo = data
    }
}
// 处理action，可以数学自己的业务逻辑，也可以处理异步
const actions = {
    async getUserAddress({commit}){
        //13700000000
        //111111
        let res = await reqAddressInfo()
        if(res.code == 200){
            commit("GETUSERADDRESS",res.data)
        }
    },
    async getOrderInfo({commit}){
        let res = await reqOrderInfo()
        if(res.code == 200){
            commit("GETORDERINFO",res.data)
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