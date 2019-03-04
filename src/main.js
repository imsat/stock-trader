// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

// window.$ = window.jQuery = require('jquery')
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store/index'

Vue.config.productionTip = false

Vue.use(axios)

// try to connect firebase but failed
// axios.options.root = 'firebase_url'



Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render: h => h(App),
  template: '<App/>'
})
