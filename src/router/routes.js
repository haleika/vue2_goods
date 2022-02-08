export default [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        meta: { show: true, showSort: true },
        component: resolve => require(['@/views/Home'], resolve)
    },
    {
        path: "/login",
        component: resolve => require(['@/views/Login'], resolve)
    },
    {
        path: "/register",
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
        component: resolve => require(['@/views/Detail'], resolve)
    },
]