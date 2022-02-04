
//api统一管理

import requests from './request';

// 三级联动接口
/**
 * url /api/product/getBaseCategoryList
 * method GET
 */

export const reqCategoryList = () => requests({url:"/product/getBaseCategoryList",method:'GET'})