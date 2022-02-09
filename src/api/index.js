
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