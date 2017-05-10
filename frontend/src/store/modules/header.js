import * as types from '../mutations-types'

/* eslint key-spacing: ["error", { "align": "colon" }] */

// initial state
const state = {
  isHamburegerMenuActive: false,
  isLoginSignupMenuOpen : false
}

// getters
const getters = {
  isHamburegerMenuActive: state => state.isHamburegerMenuActive,
  isLoginSignupMenuOpen : state => state.isLoginSignupMenuOpen
}

// actions
const actions = {
  toggleLoginSignupMenu ({ commit }) {
    commit(types.TOGGLE_LOGIN_SIGNUP_MENU)
  },
  toggleHamburgerMenu ({ commit }) {
    commit(types.TOGGLE_HAMBURGER_MENU)
  }
}

// mutations
const mutations = {
  [types.TOGGLE_LOGIN_SIGNUP_MENU] (state) {
    state.isLoginSignupMenuOpen = state.isLoginSignupMenuOpen !== true
  },

  [types.TOGGLE_HAMBURGER_MENU] (state) {
    state.isHamburegerMenuActive = state.isHamburegerMenuActive !== true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
