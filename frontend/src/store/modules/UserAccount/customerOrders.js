import * as types from '../../mutations-types'
// import _ from 'lodash'

// initial state
/* eslint key-spacing: ["error", { "align": "colon" }] */
const state = {
  orders: [ ]
}

// getters
const getters = {
  orders: state => state.orders
}

// actions
const actions = {
  getOrdersOfCustomer ({ commit, rootState }) {
    const customerId = rootState.route.params.customerId
    fetch(`http://localhost:10010/api/v1/customers/${customerId}/orders`, { method: 'GET' })
      .then(success => success.json())
      .then(customerOrdersResponse => {
        if (customerOrdersResponse.code === 200) {
          commit(types.UPDATE_LIST_OF_CUSTOMER_ORDERS, customerOrdersResponse.orders)
        }
      })
  },
  cancelCustomerOrderById ({ commit, rootState }, data) {
    const newStatus = new FormData()
    newStatus.append('is_active', !data.orderStatus)
    fetch(`http://localhost:10010/api/v1/orders/${data.orderId}/status`, {
      method: 'PATCH',
      body  : newStatus
    })
      .then(success => success.json())
      .then(customerOrdersResponse => {
        if (customerOrdersResponse.code === 200) {
          commit(types.UPDATE_CUSTOMER_ORDER_STATUS, { commit, rootState })
        }
      })
  }
}

// mutations
const mutations = {

  [types.UPDATE_LIST_OF_CUSTOMER_ORDERS] (state, listOfCustomerOrders) {
    state.orders = listOfCustomerOrders
  },

  [types.UPDATE_CUSTOMER_ORDER_STATUS] (state, { commit, rootState }) {
    state.orders = [ ]
    actions.getOrdersOfCustomer({ commit, rootState })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
