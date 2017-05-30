import * as types from '../mutations-types'

/* eslint key-spacing: ["error", { "align": "colon" }] */

// initial state
const state = {
  basket: {
    articles  : [ ],
    isLoading : true,
    totalPrice: 0,
    quantity  : 1
  }
}

// getters
const getters = {
  basket: state => state.basket
}

// actions
const actions = {
  getBasketArticles ({ commit }) {
    const basketArticles = ''
    commit(types.UPDATE_SHOPPING_CART, basketArticles)
  },
  updateArticleQuantity ({ commit }, newQuantity) {
    commit(types.UPDATE_ARTICLE_QUANTITY, newQuantity)
  }
}

// mutations
const mutations = {
  [types.UPDATE_SHOPPING_CART] (state, basketArticles) {
    state.basket.articles = basketArticles
  },
  [types.UPDATE_ARTICLE_QUANTITY] (state, newQuantity) {
    state.basket.quantity = newQuantity
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
