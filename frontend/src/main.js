// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue      from 'vue'
import Vuex     from 'vuex'
import App      from './App'
import store    from './store'
import router   from './router'
import { sync } from 'vuex-router-sync'

import 'unfetch/polyfill'

Vue.use(Vuex)
Vue.config.productionTip = false

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
