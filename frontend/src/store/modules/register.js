import * as types from '../mutations-types'
import _          from 'lodash'
import router     from '@/router'
/* eslint key-spacing: ["error", { "align": "colon" }] */

// initial state
const state = {
  newUser: {
    email          : '',
    password       : '',
    confirmPassword: '',
    firstname      : '',
    lastname       : '',
    birthdate      : '',
    isAdmin        : false
  },
  isLoading    : false,
  createMessage: ''
}

// getters
const getters = {
  newUser: state => state.newUser
}

// actions
const actions = {
  updateFirstname ({ commit }, firstname) {
    commit(types.UPDATE_FIRSTNAME, firstname)
  },
  updateLastname ({ commit }, lastname) {
    commit(types.UPDATE_LASTNAME, lastname)
  },
  updateEmail ({ commit }, email) {
    commit(types.UPDATE_EMAIL, email)
  },
  updatePassword ({ commit }, password) {
    commit(types.UPDATE_PASSWORD, password)
  },
  updateConfirmPassword ({ commit }, confirmPassword) {
    commit(types.UPDATE_CONFIRMATION_PASSWORD, confirmPassword)
  },
  updateBirthday ({ commit }, birthday) {
    commit(types.UPDATE_BIRTHDAY, birthday)
  },
  updateIsAdmin ({ commit }, isAdmin) {
    commit(types.UPDATE_IS_ADMIN, isAdmin)
  },
  createUser ({ commit, state, rootState }) {
    const entityToCreate = rootState.me.administratorMode === true ? 'administrators' : 'customers'
    const newUserForm = new FormData()

    // For now, we let the user with the active state at TRUE
    _.mapKeys({ is_active: true, ...state.newUser }, (value, key) => {
      switch (entityToCreate) {
        case 'administrators':
          if (key !== 'birthdate' && key !== 'confirmPassword' && key !== 'isAdmin') {
            newUserForm.append(key, value)
          }
          break

        case 'customers':
          if (key !== 'isAdmin' && key !== 'confirmPassword') {
            newUserForm.append(key, value)
          }
          break
      }
    })

    fetch(`http://localhost:10010/api/v1/${entityToCreate}`, {
      method: 'POST',
      body  : newUserForm
    })
    .then(success       => success.json())
    .then(createUserResponse => {
      commit(types.TOGGLE_BUTTON_STATUS)
      if (createUserResponse.code === 201) {
        console.log(createUserResponse)
        if (!rootState.me.administratorMode) {
          router.push({ name: 'Home' })
        }
      }
    })
  }
}

// mutations
const mutations = {
  [types.UPDATE_FIRSTNAME] (state, firstname) {
    state.newUser.firstname = firstname
  },

  [types.UPDATE_LASTNAME] (state, lastname) {
    state.newUser.lastname = lastname
  },

  [types.UPDATE_EMAIL] (state, email) {
    state.newUser.email = email
  },

  [types.UPDATE_PASSWORD] (state, password) {
    state.newUser.password = password
  },

  [types.UPDATE_CONFIRMATION_PASSWORD] (state, confirmPassword) {
    state.newUser.confirmPassword = confirmPassword
  },

  [types.UPDATE_BIRTHDAY] (state, birthday) {
    state.newUser.birthdate = birthday
  },

  [types.UPDATE_IS_ADMIN] (state, isAdmin) {
    state.newUser.isAdmin = isAdmin
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
