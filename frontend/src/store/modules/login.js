import * as types from '../mutations-types'

/* eslint key-spacing: ["error", { "align": "colon" }] */

// initial state
const state = {
  credentials: {
    email   : '',
    password: ''
  },
  isLoading   : false,
  isLoggedIn  : false,
  loginMessage: ''
}

// getters
const getters = {
  getCredentials      : state => state.credentials,
  isLoginButtonLoading: state => state.loading,
  isLoggedIn          : state => state.isLoggedIn
}

// actions
const actions = {
  updateEmail ({ commit }, email) {
    commit(types.UPDATE_EMAIL, email)
  },
  updatePassword ({ commit }, password) {
    commit(types.UPDATE_PASSWORD, password)
  },
  checkCredentials ({ commit, state }) {
    commit(types.TOGGLE_BUTTON_STATUS)
    fetch('http://localhost:10010/api/v1/login', {
      method     : 'POST',
      credentials: 'include',
      headers    : {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `email=${state.credentials.email}&password=${state.credentials.password}`
    })
    .then(success       => success.json())
    .then(loginResponse => {
      commit(types.TOGGLE_BUTTON_STATUS)
      if (loginResponse.loggedIn) {
        commit(types.UPDATE_LOGIN_STATUS, true)
        commit(types.UPDATE_LOGIN_MESSAGE, loginResponse.message)
      }
    })
  }
}

// mutations
const mutations = {
  [types.UPDATE_EMAIL] (state, email) {
    state.credentials.email = email
  },

  [types.UPDATE_PASSWORD] (state, password) {
    state.credentials.password = password
  },

  [types.TOGGLE_BUTTON_STATUS] (state) {
    state.isLoginButtonLoading = state.isLoginButtonLoading !== true
  },

  [types.UPDATE_LOGIN_MESSAGE] (state, loginMessage) {
    state.loginMessage = loginMessage
  },

  [types.UPDATE_LOGIN_STATUS] (state, loginStatus) {
    state.isLoggedIn = loginStatus
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
