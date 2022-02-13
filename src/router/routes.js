export default [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        name: "home",
        meta: { show: true, showSort: true },
        component: ()=>import('@/views/Home')
    },
    {
        path: "/login",
        name: "login",
        component: ()=>import('@/views/Login'),
    },
    {
        path: "/register",
        name: "register",
        component: ()=>import('@/views/Register'),
    },
    {
        path: "/search/:keyword?",
        name: "search",
        component: ()=>import('@/views/Search'),
        meta: { show: true, showSort: false }
    },
    {
        path: "/Detail/:skuId?",
        name: "search",
        component: ()=>import('@/views/Detail'),
        meta: { show: true }
    },
    {
        path: "/addCartSuccess",
        name: "AddCartSuccess",
        component: ()=>import('@/views/AddCartSuccess'),
        meta: { show: true }
    },
    {
        path: "/shopCart",
        name: "ShopCart",
        component: ()=>import('@/views/ShopCart'),
        meta: { show: true }
    },
    {
        path: "/trade",
        name: "Trade",
        component: ()=>import('@/views/Trade'),
        meta: { show: true },
        beforeEnter(to,from,next){
            if(from.path == '/shopCart'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path: "/pay",
        name: "Pay",
        component: ()=>import('@/views/Pay'),
        meta: { show: true },
        beforeEnter(to,from,next){
            if(from.path == '/Trade' || from.path == '/trade'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path: "/paysuccess",
        name: "paysuccess",
        component: ()=>import('@/views/PaySuccess'),
        meta: { show: true }
    },
    {
        path: "/center",
        name: "Center",
        component: ()=>import('@/views/Center'),
        meta: { show: true },
        children:[
            {
                path:"/center",
                redirect:"/center/myorder"
            },
            {
                path:'myorder',
                component:()=>import('@/views/Center/MyOrder'),
            },
            {
                path:'grouporder',
                component:resolve => require(['@/views/Center/GroupOrder'], resolve),
            }
        ]
    },
]