<template>
  <div id="app">
    <Header />
    <!-- 路由组件展示 -->
    <router-view></router-view>
    <!-- <Footer v-show="['/home','/search'].includes($route.path)"/> -->
    <Footer v-show="$route.meta && $route.meta.show"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>
