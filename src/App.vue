<template>
  <div id="app">
    <Header />
    <!-- 路由组件展示 -->
    <router-view></router-view>
    <!-- <Footer v-show="['/home','/search'].includes($route.path)"/> -->
    <Footer v-show="$route.meta && $route.meta.show" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Vue from 'vue';
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    //通知vuex，获取数据，储存在仓库中
    this.$store.dispatch("getCategoryList");
  },
  beforeCreate(){
    Vue.prototype.$bus = this
  }
};
</script>
