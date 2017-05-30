import Vue               from 'vue'
import Vuex              from 'vuex'
import login             from './modules/login'
import model             from './modules/model'
import shoesList         from './modules/shoesList'
import customerData      from './modules/UserAccount/basicCustomerData'
import customerAddresses from './modules/UserAccount/customerAddresses'
import customerOrders    from './modules/UserAccount/customerOrders'
import register          from './modules/register'
import customization     from './modules/customization'
import me                from './modules/me' // current logged in user
import header            from './modules/header'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    me,
    login,
    model,
    shoesList,
    customerData,
    customerAddresses,
    customerOrders,
    customization,
    register,
    header
  },
  strict: debug
})
