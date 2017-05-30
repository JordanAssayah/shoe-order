import * as types from '../mutations-types'
import router     from '../../router'

// initial state
/* eslint key-spacing: ["error", { "align": "colon" }] */
const state = {
  customers         : [ ],
  isLoadingCustomers: true
}

// getters
const getters = {
  customers         : state => state.customers,
  isLoadingCustomers: state => state.isLoadingCustomers
}

// actions
const actions = {
  addNewUser ({ commit }) {
    router.push({ name: 'Register' })
  },
  toggleCustomerActivation ({ commit }, { customerId, isActive }) {
    let form = new FormData()
    form.append('is_active', !isActive)
    fetch(`http://localhost:10010/api/v1/customers/${customerId}`, {
      method: 'PATCH',
      body  : form
    })
      .then(success => success.json())
      .then(changeCustomerInfoResponse => {
        if (changeCustomerInfoResponse.code === 200) {
          commit(types.TOGGLE_CUSTOMER_ACTIVATION, commit)
        }
      })
  },
  getAllCustomers ({ commit }) {
    fetch('http://localhost:10010/api/v1/customers', { method: 'GET' })
      .then(success => success.json())
      .then(customersResponse => {
        if (customersResponse.code === 200) {
          commit(types.UPDATE_LIST_OF_CUSTOMERS, customersResponse.customers)
          commit(types.UPDATE_IS_LOADING_CUSTOMERS_STATUS)
        }
      })
  }
}

// mutations
const mutations = {

  [types.UPDATE_LIST_OF_CUSTOMERS] (state, customers) {
    state.customers = customers
  },

  [types.UPDATE_IS_LOADING_CUSTOMERS_STATUS] (state) {
    state.isLoadingCustomers = state.isLoadingCustomers !== true
  },

  [types.TOGGLE_CUSTOMER_ACTIVATION] (state, commit) {
    state.customers = []
    state.isLoadingCustomers = true
    actions.getAllCustomers({ commit })
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
