// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
//vuex 依赖babel-polyfill
import 'babel-polyfill'
import App from './App'
import router from './router'
//引入淘宝libflexible
import './utils/libFlexibleCustom'
// import 'lib-flexible'
import vConsole from 'vconsole'
import FastClick from 'fastclick'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'

import 'normalize.css'
import './common/css/index.scss'
import 'vue2-animate/dist/vue2-animate.css'


Vue.config.productionTip = false;

Vue.use(Vuex);
//vue图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',
  loading: 'common/image/loading.gif',
  attempt: 2
});
//解决移动端点击问题
FastClick.attach(document.body);
//移动端调试面板
new vConsole;
//挂在非vue插件的axios到全局
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
