import * as types          from '../mutations-types'
import * as shoesListStore from './shoesList'

/* eslint key-spacing: ["error", { "align": "colon" }] */

// initial state
const state = {
  responseMessage: ' '
}

// getters
const getters = {

}

// actions
const actions = {
  removeArticle ({ commit }, articleId) {
    fetch(`http://localhost:10010/api/v1/articles/${articleId}`, {
      method: 'DELETE'
    })
      .then(success => success.json())
      .then(removeArticleResponse => {
        if (removeArticleResponse.code === 200) {
          commit(types.REMOVE_ARTICLE, {
            message: removeArticleResponse.message,
            commit
          })
        }
      })
  }
}

// mutations
const mutations = {
  [types.REMOVE_ARTICLE] (state, { message, commit }) {
    state.responseMessage = message
    shoesListStore.default.actions.getAllShoesModels({ commit })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
