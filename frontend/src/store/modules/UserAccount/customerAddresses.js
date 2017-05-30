import * as types from '../../mutations-types'
import _ from 'lodash'

// initial state
/* eslint key-spacing: ["error", { "align": "colon" }] */
const state = {
  addresses             : [ ],
  message               : '',
  error                 : [ ],
  newAddress            : { },
  isAddressEdit         : false,
  makeChangesToAddressId: undefined
}

// getters
const getters = {
  addresses             : state => state.addresses,
  newAddress            : state => state.newAddress,
  isAddressEdit         : state => state.isAddressEdit,
  makeChangesToAddressId: state => state.makeChangesToAddressId
}

// actions
const actions = {
  getCustomerAddresses ({ commit, rootState }) {
    const customerId = rootState.route.params.customerId
    fetch(`http://localhost:10010/api/v1/customers/${customerId}/addresses`, { method: 'GET' })
      .then(success => success.json())
      .then(customerAddressesResponse => {
        if (customerAddressesResponse.code === 200) {
          commit(types.UPDATE_CUSTOMER_ADDRESSES, customerAddressesResponse.addresses)
        }
      })
  },
  editCustomerAddress ({ commit, state }, index) {
    const {
      id,
      description,
      street,
      country,
      city,
      zip_code,
      firstname,
      lastname,
      phone
    } = state.addresses[index]

    const addressId = id

    const addressToChange = {
      description,
      street,
      country,
      state: state.addresses[index].state,
      city,
      zip_code,
      firstname,
      lastname,
      phone
    }

    commit(types.EDIT_CUSTOMER_ADDRESS, { addressToChange, addressId })
  },
  clearAddress ({ commit }) {
    commit(types.CLEAR_ADDRESS)
  },
  deleteCustomerAddress ({ commit, rootState }, addressId) {
    fetch(`http://localhost:10010/api/v1/addresses/${addressId}`, { method: 'DELETE' })
      .then(success => success.json())
      .then(customerDeleteAddressResponse => {
        if (customerDeleteAddressResponse.code === 200) {
          commit(types.DELETE_CUSTOMER_ADDRESS, {
            message: customerDeleteAddressResponse.message,
            commit,
            rootState
          })
        }
      })
  },
  updateCustomerAddressDescription ({ commit }, description) {
    commit(types.UPDATE_ADDRESS_DESCRIPTION, description)
  },
  updateCustomerAddressFirstname ({ commit }, firstname) {
    commit(types.UPDATE_ADDRESS_FIRSTNAME, firstname)
  },
  updateCustomerAddressLastname ({ commit }, lastname) {
    commit(types.UPDATE_ADDRESS_LASTNAME, lastname)
  },
  updateCustomerAddressCountry ({ commit }, country) {
    commit(types.UPDATE_ADDRESS_COUNTRY, country)
  },
  updateCustomerAddressState ({ commit }, state) {
    commit(types.UPDATE_ADDRESS_STATE, state)
  },
  updateCustomerAddressStreet ({ commit }, street) {
    commit(types.UPDATE_ADDRESS_STREET, street)
  },
  updateCustomerAddressCity ({ commit }, city) {
    commit(types.UPDATE_ADDRESS_CITY, city)
  },
  updateCustomerAddressZip ({ commit }, zip) {
    commit(types.UPDATE_ADDRESS_ZIP, zip)
  },
  updateCustomerAddressPhone ({ commit }, phone) {
    commit(types.UPDATE_ADDRESS_PHONE, phone)
  },
  updateCustomerAddressIsDefault ({ commit }, isDefault) {
    commit(types.UPDATE_ADDRESS_IS_DEFAULT, isDefault)
  },
  saveAddressChanges ({ commit, state, rootState }, addressId) {
    const newAddress = new FormData()
    _.mapKeys(state.newAddress, (value, key) => {
      newAddress.append(key, value)
    })
    fetch(`http://localhost:10010/api/v1/addresses/${addressId}`, {
      method: 'PATCH',
      body  : newAddress
    })
      .then(success => success.json())
      .then(createAddressResponse => {
        if (createAddressResponse.code === 200) {
          commit(types.SAVE_CUSTOMER_ADDRESS, {
            message: createAddressResponse.message,
            commit,
            rootState
          })
        }
      })
  },
  saveNewCustomerAddress ({ commit, state, rootState }) {
    const customerId = rootState.route.params.customerId
    const completeAddressObject = { customerId: customerId, ...state.newAddress }
    const newAddress = new FormData()
    _.mapKeys(completeAddressObject, (value, key) => {
      newAddress.append(key, value)
    })

    fetch(`http://localhost:10010/api/v1/addresses`, {
      method: 'POST',
      body  : newAddress
    })
      .then(success => success.json())
      .then(createAddressResponse => {
        if (createAddressResponse.code === 201) {
          commit(types.SAVE_CUSTOMER_NEW_ADDRESS, {
            name: createAddressResponse.address.description,
            commit,
            rootState
          })
        }
      })
  }
}

// mutations
const mutations = {

  [types.UPDATE_CUSTOMER_ADDRESSES] (state, customerAddresses) {
    state.addresses = customerAddresses
  },

  [types.EDIT_CUSTOMER_ADDRESS] (state, { addressToChange, addressId }) {
    state.isAddressEdit          = true
    state.makeChangesToAddressId = addressId
    state.newAddress             = addressToChange
  },

  [types.DELETE_CUSTOMER_ADDRESS] (state, { message, commit, rootState }) {
    actions.getCustomerAddresses({ commit, rootState })
    state.message = message
  },

  [types.CLEAR_ADDRESS] (state) {
    state.newAddress    = { }
    state.isAddressEdit = false
  },

  [types.UPDATE_ADDRESS_DESCRIPTION] (state, description) {
    state.newAddress.description = description
  },
  [types.UPDATE_ADDRESS_FIRSTNAME] (state, firstname) {
    state.newAddress.firstname = firstname
  },
  [types.UPDATE_ADDRESS_LASTNAME] (state, lastname) {
    state.newAddress.lastname = lastname
  },
  [types.UPDATE_ADDRESS_COUNTRY] (state, country) {
    state.newAddress.country = country
  },
  [types.UPDATE_ADDRESS_STATE] (state, stateOfCustomer) {
    state.newAddress.state = stateOfCustomer
  },
  [types.UPDATE_ADDRESS_STREET] (state, street) {
    state.newAddress.street = street
  },
  [types.UPDATE_ADDRESS_CITY] (state, city) {
    state.newAddress.city = city
  },
  [types.UPDATE_ADDRESS_ZIP] (state, zip) {
    state.newAddress.zip_code = zip
  },
  [types.UPDATE_ADDRESS_PHONE] (state, phone) {
    state.newAddress.phone = phone
  },
  [types.UPDATE_ADDRESS_IS_DEFAULT] (state, isDefault) {
    state.newAddress.isDefault = isDefault
  },

  [types.SAVE_CUSTOMER_ADDRESS] (state, { message, commit, rootState }) {
    actions.getCustomerAddresses({ commit, rootState })
    state.message = message
  },

  [types.SAVE_CUSTOMER_NEW_ADDRESS] (state, { name, commit, rootState }) {
    actions.getCustomerAddresses({ commit, rootState })
    state.message = `The address ${name} was successfully updated !`
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
