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
  getArticleConfiguration ({ commit }) {
    commit(types.UPDATE_ARTICLE_CONFIGURATION_FOR_CUSTOMIZATION)
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
  [types.UPDATE_ARTICLE_CONFIGURATION_FOR_CUSTOMIZATION] (state) {

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
