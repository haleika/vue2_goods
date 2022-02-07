import axios from 'axios'
//进度条
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
//start:进度条开始  done：进度条结束

//1.利用axios对象方法create，去创建一个axios对象

const requests = axios.create({
    baseURL:"/mock",
    timeout:5000,
})

// 请求拦截器，在发请求前可以检测，可以在发请求前拦截一些事情
requests.interceptors.request.use(condig=>{
    nprogress.start()
    return condig;
})


// 响应拦截器
requests.interceptors.response.use(res=>{
    nprogress.done()
    return res.data;
},error=>{
    //响应失败的回调
    nprogress.done()

    return Promise.reject(new Error(error))
})


export default requests