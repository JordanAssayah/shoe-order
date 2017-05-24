import * as types from '../mutations-types'

/* eslint key-spacing: ["error", { "align": "colon" }] */

// initial state
const state = {
  customiztaion: {
    parts: { },
    size : ' '
  },
  articleConfiguration: {
    name  : ' ',
    parts : [ ],
    colors: [ ],
    sizes : [ ]
  },
  selectionType: 'parts',
  partSelected : undefined,
  colorSelected: undefined
}

// getters
const getters = {
  articleConfiguration: state => state.articleConfiguration,
  partSelected        : state => state.partSelected
}

// actions
const actions = {
  getArticleConfiguration ({ commit, rootState }) {
    const articleId = rootState.route.params.articleId
    fetch(`http://localhost:10010/api/v1/articles/${articleId}`)
    .then(success => success.json())
    .then(getArticleResponse => {
      if (getArticleResponse.code === 200) {
        commit(types.UPDATE_ARTICLE_CONFIGURATION_FOR_CUSTOMIZATION, getArticleResponse.article)
      }
    })
  },
  selectPart ({ commit }, part) {
    commit(types.SELECT_PART, part)
  },
  buy ({ commit }) {
    commit(types.BUY_CUSTOMIZATION)
  }
}

// mutations
const mutations = {
  [types.UPDATE_ARTICLE_CONFIGURATION_FOR_CUSTOMIZATION] (state, article) {
    state.articleConfiguration = article
  },

  [types.SELECT_PART] (state, part) {
    state.partSelected = part
  },

  [types.BUY_CUSTOMIZATION] (state) {

  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
