
//api统一管理

import requests from './request';

import mockRequests from './mockApi';

// 三级联动接口
/**
 * url /api/product/getBaseCategoryList
 * method GET
 */

export const reqCategoryList = () => requests({ url: "/product/getBaseCategoryList", method: 'GET' })


export const reqGetBannerList = () => mockRequests.get('/banner')

export const reqGetFloorList = () => mockRequests.get('/floor')


export const reqGetSearchInfo = (params) => requests({
    url: '/list',
    method: 'POST',
    data: params
})

export const reqGoodsInfo = (skuId) => requests({
    url: `/item/${skuId}`,
    method: 'GET'
})

export const reqAddOrUpdateShopCar = (skuId, skuNum) => requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'POST'
})

export const reqCarList = () => requests({
    url: `/cart/cartList`,
    method: 'GET'
})

export const reqDeleteCartById = (skuId) => requests({
    url: `/cart/deleteCart/${skuId}`,
    method: 'DELETE'
})
// 修改商品选中
export const reqUpdateCheckedById = (skuId, isChecked) => requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'GET'
})

// 获取验证码
export const reqGetCode = (phone) => requests({
    url: `/user/passport/sendCode/${phone}`,
    method: 'GET'
})


export const reqUserRegister = (params) => requests({
    url: `user/passport/register`,
    method: 'POST',
    data: params
})

export const reqUserLogin = (params) => requests({
    url: `user/passport/login`,
    method: 'POST',
    data: params
})

export const reqUserInfo = () => requests({
    url: `user/passport/auth/getUserInfo`,
    method: 'get'
})


export const reqLoginOut = () => requests({
    url: `user/passport/logout`,
    method: 'get'
})


export const reqAddressInfo = () => requests({
    url: `user/userAddress/auth/findUserAddressList`,
    method: 'get'
})
//获取商品清单
export const reqOrderInfo = () => requests({
    url: `order/auth/trade`,
    method: 'get'
})


// 提交订单

export const reqSubnitOrder = (tradeNo,data) => requests({
    url: `order/auth/submitOrder?tradeNo=${tradeNo}`,
    method: 'POST',
    data
})

export const reqPayInfo = (orderId) => requests({
    url: `payment/weixin/createNative/${orderId}`,
    method: 'GET'
})

//查询支付状态
//payment/weixin/queryPayStatus/{orderId}

export const reqPsyStatus = (orderId) => requests({
    url: `payment/weixin/queryPayStatus/${orderId}`,
    method: 'GET'
})

export const reqGetOrder=(page,limit)=>requests({
    url:`order/auth/${page}/${limit}`,
    method:"GET"
})