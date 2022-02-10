export default [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        name: "home",
        meta: { show: true, showSort: true },
        component: resolve => require(['@/views/Home'], resolve)
    },
    {
        path: "/login",
        name: "login",
        component: resolve => require(['@/views/Login'], resolve)
    },
    {
        path: "/register",
        name: "register",
        component: resolve => require(['@/views/Register'], resolve)
    },
    {
        path: "/search/:keyword?",
        name: "search",
        component: resolve => require(['@/views/Search'], resolve),
        meta: { show: true, showSort: false }
    },
    {
        path: "/Detail/:skuId?",
        name: "search",
        component: resolve => require(['@/views/Detail'], resolve),
        meta: { show: true }
    },
    {
        path: "/addCartSuccess",
        name: "AddCartSuccess",
        component: resolve => require(['@/views/AddCartSuccess'], resolve),
        meta: { show: true }
    },
    {
        path: "/shopCart",
        name: "ShopCart",
        component: resolve => require(['@/views/ShopCart'], resolve),
        meta: { show: true }
    },
]