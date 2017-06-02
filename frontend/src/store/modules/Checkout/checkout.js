import * as types from '../../mutations-types'
import _          from 'lodash'

/* eslint key-spacing: ["error", { "align": "colon" }] */

// initial state
const state = {
  checkout: {
    articles  : [ ],
    isLoading : true,
    totalPrice: 0,
    quantity  : 1
  },
  stepOne: {
    addresses  : [ ],
    usedAddress: { }
  },
  stepTwo: {
    paymentMethod: '',
    isAgreed     : false
  },
  stepThree: {

  }
}

// getters
const getters = {
  stepOne  : state => state.stepOne,
  stepTwo  : state => state.stepTwo,
  stepThree: state => state.stepThree
}

// actions
const actions = {
  getCustomerAddresses ({ commit }) {
  //  const customerId = 1
    fetch(`http://localhost:10010/api/v1/customers/1/addresses`)
      .then(success => success.json())
      .then(customerAddressesResponse => {
        if (customerAddressesResponse.code === 200) {
          commit(types.UPDATE_CUSTOMER_ADDRESSES_CHECKOUT, customerAddressesResponse.addresses)
        }
      })
  },
  getBasketArticles ({ commit }) {
    const basketArticles = ''
    commit(types.UPDATE_SHOPPING_CART, basketArticles)
  },
  updateArticleQuantity ({ commit }, newQuantity) {
    commit(types.UPDATE_ARTICLE_QUANTITY, newQuantity)
  },
  updatePaymentMethod ({ commit }, paymentMethod) {
    commit(types.UPDATE_PAYMENT_METHOD, paymentMethod)
  },
  updateCheckoutAddress ({ commit, state }, addressId) {
    const address = _.find(state.stepOne.addresses, (address) => address.id === parseInt(addressId))
    if (address !== undefined) {
      commit(types.UPDATE_CHECKOUT_ADDRESS, address)
    }
  },
  updateCheckoutAgreement ({ commit }) {
    commit(types.UPDATE_CHECKOUT_AGREEMENT)
  }
}

// mutations
const mutations = {
  [types.UPDATE_PAYMENT_METHOD] (state, paymentMethod) {
    state.stepTwo.paymentMethod = paymentMethod
  },

  [types.UPDATE_CUSTOMER_ADDRESSES_CHECKOUT] (state, addresses) {
    state.stepOne.addresses = addresses
  },

  [types.UPDATE_CHECKOUT_ADDRESS] (state, address) {
    state.stepOne.usedAddress = address
  },

  [types.UPDATE_CHECKOUT_AGREEMENT] (state) {
    state.stepTwo.isAgreed = state.stepTwo.isAgreed !== true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
