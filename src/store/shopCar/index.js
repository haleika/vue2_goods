
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