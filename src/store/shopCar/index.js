
import { reqCarList, reqDeleteCartById, reqUpdateCheckedById } from '@/api'
const state = {
    carList: []
}

const mutations = {
    GETCARLIST(state, data) {
        state.carList = data
    }
}

const actions = {
    async getCarList({ commit }) {
        let res = await reqCarList()
        if (res.code == 200) {
            commit("GETCARLIST", res.data)
        }
    },
    async deleteCartListBySkuId({ commit }, skuId) {
        await reqDeleteCartById(skuId)
    },
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        let res = await reqUpdateCheckedById(skuId, isChecked)
        if(res.code == 200){
            return "ok"
        } else{
            return Promise.reject(new Error("fail"))
        }
    },
    async deleteAllCheckedCart({dispatch,getters}){
        let PromiseAll = []
        getters.cartList.cartInfoList.forEach(item=>{
            let promise = item.isChecked == 1?dispatch("deleteCartListBySkuId",item.skuId):""
            PromiseAll.push(promise)
        })
        return Promise.all(PromiseAll)
    }
}

const getters = {
    cartList(state) {
        return state.carList[0] || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}