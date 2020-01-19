// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import store from './vuex/store'
import router from './router'
import qrcode from "@/components/qrcode";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';




Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'

})
