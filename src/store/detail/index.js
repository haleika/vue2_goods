
import { reqGoodsInfo, reqAddOrUpdateShopCar } from '@/api'
import { getUUID } from '@/utils/uuid_token'
const state = {
    goodsInfo: {},
    uuid_token:getUUID()
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
    },
    async addGoodInfo({ commit }, { skuId, skuNum }) {
        let res = await reqAddOrUpdateShopCar(skuId, skuNum)
        if (res.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error("fail"))
        }
    }
}

const getters = {
    categoryView(state) {
        return state.goodsInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodsInfo.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.goodsInfo.spuSaleAttrList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}