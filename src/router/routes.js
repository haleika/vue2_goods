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
    {
        path: "/trade",
        name: "Trade",
        component: resolve => require(['@/views/Trade'], resolve),
        meta: { show: true }
    },
    {
        path: "/pay",
        name: "Pay",
        component: resolve => require(['@/views/Pay'], resolve),
        meta: { show: true }
    },
    {
        path: "/paysuccess",
        name: "paysuccess",
        component: resolve => require(['@/views/PaySuccess'], resolve),
        meta: { show: true }
    },
    {
        path: "/center",
        name: "Center",
        component: resolve => require(['@/views/Center'], resolve),
        meta: { show: true },
        children:[
            {
                path:"/center",
                redirect:"/center/myorder"
            },
            {
                path:'myorder',
                component:resolve => require(['@/views/Center/MyOrder'], resolve),
            },
            {
                path:'grouporder',
                component:resolve => require(['@/views/Center/GroupOrder'], resolve),
            }
        ]
    },
]