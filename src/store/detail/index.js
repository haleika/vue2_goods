
import { reqGoodsInfo } from '@/api'
const state = {
    goodsInfo: {}
}

const mutations = {
    GETGOODINFO(state, data) {
        state.goodsInfo = data
    }
}

const actions = {
    async getGoodInfo({ commit }, skuId) {
        let res = await reqGoodsInfo(skuId)
        if (res.code == 200) {
            commit('GETGOODINFO', res.data)
        }
    }
}

const getters = {
    categoryView(state){
        return state.goodsInfo.categoryView || {}
    },
    skuInfo(state){
        return state.goodsInfo.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.goodsInfo.spuSaleAttrList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}