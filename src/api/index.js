
//api统一管理

import requests from './request';

import mockRequests from './mockApi';

// 三级联动接口
/**
 * url /api/product/getBaseCategoryList
 * method GET
 */

export const reqCategoryList = () => requests({url:"/product/getBaseCategoryList",method:'GET'})


export const reqGetBannerList = () =>mockRequests.get('/banner')

export const reqGetFloorList = () =>mockRequests.get('/floor')


export const reqGetSearchInfo = (params) =>requests({
    url:'/list',
    method:'POST',
    data:params
})

export const reqGoodsInfo = (skuId) => requests({
    url:`/item/${skuId}`,
    method:'GET'
})

export const reqAddOrUpdateShopCar = (skuId,skuNum) =>requests({
    url:`/cart/addToCart/${skuId}/${skuNum}`,
    method:'POST'
})

export const reqCarList = () =>requests({
    url:`/cart/cartList`,
    method:'GET'
})

export const reqDeleteCartById = (skuId) =>requests({
    url:`/cart/deleteCart/${skuId}`,
    method:'DELETE'
})
// 修改商品选中
export const reqUpdateCheckedById = (skuId,isChecked) =>requests({
    url:`/cart/checkCart/${skuId}/${isChecked}`,
    method:'GET'
})