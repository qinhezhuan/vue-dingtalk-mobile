// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'

import '@/assets/css/iconfont.css'
import 'lib-flexible/flexible'
import 'normalize.css/normalize.css'

Vue.use(MintUI)

const FastClick = require('fastclick')
FastClick.attach(document.body)

import * as DingTalkApi from 'dingtalk-jsapi'
Vue.prototype.DingTalkApi = DingTalkApi

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
