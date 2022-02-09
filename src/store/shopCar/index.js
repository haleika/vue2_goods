
import { reqCarList } from '@/api'
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
    }
}

const getters = {
    cartInfoList(state){
        return state.carList[0].cartInfoList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}