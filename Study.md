#创建
vue create goods_project

#目录
node_modules 依赖
public 放静态文件
src 源代码
    assets 放置静态资源（一般是多个组件共用的静态资源）

    components 放置非路由的静态组件

APP 根组件

1.编程式导航进行路由跳转，多次点击会有错误警告
原因：vue-router  最新的引进了promise
解决1：通过给push方法传递相应的成功、错误的回调函数，可以捕获到错误，可以解决。但是治标不治本
eg：this.$router.push(
        {
          name: "register",
          params: { keyword: this.keyword },
          query: { k: this.keyword },
        },
        () => {},
        () => {}
      );

解决2：
直接在vuerouter同一修改


2.把三级联动注册为全局组件

3.接口统一管理
项目很小：完全可以在组件的生命周期函数中发请求

项目大：统一管理

4.vuex状态管理库

4.1 vuex是一个官方提供的插件，状态管理库，集中式项目中组件公用的数据。

5 $bus 在App.vue中的beforcreate函数中设置Vue.prototype.$bus = this

