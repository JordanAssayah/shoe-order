import * as types from '../mutations-types'
import router     from '@/router'

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
  clearStateForModels ({ commit }) {
    commit(types.CLEAR_STATE_FOR_MODELS_LIST)
  },
  customizeShoes ({ commit }, shoesId) {
    commit(types.CUSTOMIZE_PAIR_OF_SHOES, shoesId)
  }
}

// mutations
const mutations = {

  [types.UPDATE_LIST_OF_SHOES_MODELS] (state, shoesModels) {
    state.shoesModels = shoesModels
  },

  [types.UPDATE_IS_LOADING_MODELS_STATUS] (state) {
    state.isLoadingModels = state.isLoadingModels !== true
  },

  [types.CLEAR_STATE_FOR_MODELS_LIST] (state) {
    state.shoesModels     = [ ]
    state.isLoadingModels = true
  },

  [types.CUSTOMIZE_PAIR_OF_SHOES] (state, shoesId) {
    router.push({ name: 'Customize', params: { articleId: shoesId } })
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
