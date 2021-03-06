// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import auth from './services/auth.js'

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#main',
  router,
  template: '<App/>',
  components: { App }
})
