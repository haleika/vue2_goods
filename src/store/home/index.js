import {reqCategoryList} from '@/api'

//储存数据
const state = {
    categoryList:[]
}
// 修改state的唯一手段
const mutations={
    GETCATEGORYLIST(state,data){
        state.categoryList = data.slice(0,16)
    }
}
// 处理action，可以数学自己的业务逻辑，也可以处理异步
const actions={
    async getCategoryList({commit}){
        let res = await reqCategoryList()
        if(res.code === 200){
            commit('GETCATEGORYLIST',res.data)
        }

    }
}
// 计算数学，用于简化仓库数据
const getters={

}

export default {
    state,
    mutations,
    actions,
    getters
}