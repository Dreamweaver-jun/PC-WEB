// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VeeValidate from 'vee-validate';

import './assets/bootstrap/dist/css/bootstrap.min.css'
import './assets/bootstrap/dist/css/bootstrap.min.css'
import './assets/bootstrap/dist/js/bootstrap.min'
import './assets/css/global.scss'


window.Promise = Promise;

Vue.config.productionTip = false
Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.prototype.$http = axios;
