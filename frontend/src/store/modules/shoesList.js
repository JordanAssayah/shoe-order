import * as types from '../mutations-types'

// initial state
/* eslint key-spacing: ["error", { "align": "colon" }] */
const state = {
  shoesModels    : [ ],
  isLoadingModels: true
}

// getters
const getters = {
  shoesModels    : state => state.shoesModels,
  isLoadingModels: state => state.isLoadingModels
}

// actions
const actions = {
  getAllShoesModels ({ commit }) {
    fetch('http://localhost:10010/api/v1/articles', { method: 'GET' })
      .then(success => success.json())
      .then(shoesModelsResponse => {
        if (shoesModelsResponse.code === 200) {
          commit(types.UPDATE_LIST_OF_SHOES_MODELS, shoesModelsResponse.articles)
          commit(types.UPDATE_IS_LOADING_MODELS_STATUS)
        }
      })
  },
  customizeShoes ({ commit }, shoesId) {
    // Something
  }
}

// mutations
const mutations = {

  [types.UPDATE_LIST_OF_SHOES_MODELS] (state, shoesModels) {
    state.shoesModels = shoesModels
  },

  [types.UPDATE_IS_LOADING_MODELS_STATUS] (state) {
    state.isLoadingModels = state.isLoadingModels !== true
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
