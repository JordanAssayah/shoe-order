import * as types from '../mutations-types'
import _          from 'lodash'

/* eslint key-spacing: ["error", { "align": "colon" }] */

// initial state
const state = {
  me: {
    administratorMode: false
  }
}

// getters
const getters = {
  me: state => state.me
}

// actions
const actions = {

}

// mutations
const mutations = {
  [types.SET_ME] (state, user) {
    let isAdmin = user.isAdmin

    _.unset(user, 'isAdmin')

    if (isAdmin) {
      state.me = { administratorMode: true, ...user }
    } else {
      state.me = { ...state.me, ...user }
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
