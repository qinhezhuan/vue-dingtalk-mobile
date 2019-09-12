// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/css/iconfont.css'
// import 'lib-flexible/flexible'
import 'normalize.css/normalize.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//const FastClick = require('fastclick')
//FastClick.attach(document.body)

import wx from 'weixin-js-sdk'
Vue.prototype.wx = wx
import fetch from '@/utils/httpUtil.js'
Vue.prototype.fetch = fetch

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
