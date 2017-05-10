import Vue    from 'vue'
import Vuex   from 'vuex'
import login  from './modules/login'
import model  from './modules/model'
import header from './modules/header'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    login,
    model,
    header
  },
  strict: debug
})
