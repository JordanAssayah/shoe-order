import * as types from '../../mutations-types'
import _ from 'lodash'

// initial state
/* eslint key-spacing: ["error", { "align": "colon" }] */
const state = {
  addresses : [ ],
  message   : '',
  error     : [ ],
  newAddress: { }
}

// getters
const getters = {
  addresses : state => state.addresses,
  newAddress: state => state.newAddress
}

// actions
const actions = {
  getCustomerAddresses ({ commit }, customerId) {
    fetch(`http://localhost:10010/api/v1/customers/${customerId}/addresses`, { method: 'GET' })
      .then(success => success.json())
      .then(customerAddressesResponse => {
        if (customerAddressesResponse.code === 200) {
          commit(types.UPDATE_CUSTOMER_ADDRESSES, customerAddressesResponse.addresses)
        }
      })
  },
  clearCustomerData ({ commit }) {
    // commit(types.CLEAR_CUSTOMER_DATA)
  },
  deleteCustomerAddress ({ commit }, addressId) {
    fetch(`http://localhost:10010/api/v1/addresses/${addressId}`, { method: 'DELETE' })
      .then(success => success.json())
      .then(customerDeleteAddressResponse => {
        if (customerDeleteAddressResponse.code === 200) {
          commit(types.DELETE_CUSTOMER_ADDRESS, customerDeleteAddressResponse.message)
        }
      })
  },
  updateCustomerAddressDescription ({ commit }, index, description) {
    commit(types.UPDATE_ADDRESS_DESCRIPTION, description)
  },
  updateCustomerAddressFirstname ({ commit }, index, firstname) {
    commit(types.UPDATE_ADDRESS_FIRSTNAME, firstname)
  },
  updateCustomerAddressLastname ({ commit }, index, lastname) {
    commit(types.UPDATE_ADDRESS_LASTNAME, lastname)
  },
  updateCustomerAddressCountry ({ commit }, index, country) {
    commit(types.UPDATE_ADDRESS_COUNTRY, country)
  },
  updateCustomerAddressState ({ commit }, index, state) {
    commit(types.UPDATE_ADDRESS_STATE, state)
  },
  updateCustomerAddressStreet ({ commit }, index, street) {
    commit(types.UPDATE_ADDRESS_STREET, street)
  },
  updateCustomerAddressCity ({ commit }, index, city) {
    commit(types.UPDATE_ADDRESS_CITY, city)
  },
  updateCustomerAddressZip ({ commit }, index, zip) {
    commit(types.UPDATE_ADDRESS_ZIP, zip)
  },
  updateCustomerAddressPhone ({ commit }, index, phone) {
    commit(types.UPDATE_ADDRESS_PHONE, phone)
  },
  updateCustomerAddressIsDefault ({ commit }, index, isDefault) {
    commit(types.UPDATE_ADDRESS_IS_DEFAULT, isDefault)
  },
  updateNewCustomerAddressDescription ({ commit }, description) {
    commit(types.UPDATE_NEW_ADDRESS_DESCRIPTION, description)
  },
  updateNewCustomerAddressFirstname ({ commit }, firstname) {
    commit(types.UPDATE_NEW_ADDRESS_FIRSTNAME, firstname)
  },
  updateNewCustomerAddressLastname ({ commit }, lastname) {
    commit(types.UPDATE_NEW_ADDRESS_LASTNAME, lastname)
  },
  updateNewCustomerAddressCountry ({ commit }, country) {
    commit(types.UPDATE_NEW_ADDRESS_COUNTRY, country)
  },
  updateNewCustomerAddressState ({ commit }, state) {
    commit(types.UPDATE_NEW_ADDRESS_STATE, state)
  },
  updateNewCustomerAddressStreet ({ commit }, street) {
    commit(types.UPDATE_NEW_ADDRESS_STREET, street)
  },
  updateNewCustomerAddressCity ({ commit }, city) {
    commit(types.UPDATE_NEW_ADDRESS_CITY, city)
  },
  updateNewCustomerAddressZip ({ commit }, zip) {
    commit(types.UPDATE_NEW_ADDRESS_ZIP, zip)
  },
  updateNewCustomerAddressPhone ({ commit }, phone) {
    commit(types.UPDATE_NEW_ADDRESS_PHONE, phone)
  },
  updateNewCustomerAddressIsDefault ({ commit }, isDefault) {
    commit(types.UPDATE_NEW_ADDRESS_IS_DEFAULT, isDefault)
  },
  saveAddressChanges ({ commit, state }) {

  },
  saveNewCustomerAddress ({ commit, state }, customerId) {
    let newCustomerAddressString = ''
    const completeAddressObject = { customer_id: customerId, ...state.newAddress }

    _.mapKeys(completeAddressObject, (value, key) => {
      if (key !== 'phone') {
        newCustomerAddressString += key + '=' + value + '&'
      } else {
        newCustomerAddressString += key + '=' + value
      }
    })
    console.log(newCustomerAddressString)
    fetch(`http://localhost:10010/api/v1/addresses`, {
      method : 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body   : newCustomerAddressString
    })
      .then(success => success.json())
      .then(createAddressResponse => {
        if (createAddressResponse.code === 201) {
          console.log(createAddressResponse)
          // commit(types.SAVE_CUSTOMER_MODIFICATIONS)
        }
      })
  }
}

// mutations
const mutations = {

  [types.UPDATE_CUSTOMER_ADDRESSES] (state, customerAddresses) {
    state.addresses = customerAddresses
  },

  [types.DELETE_CUSTOMER_ADDRESS] (state, responseMessage) {
    state.message = responseMessage
  },

  // [types.CLEAR_CUSTOMER_DATA] (state) {
  //   state.basicCustomerData = {
  //     firstname : undefined,
  //     lastname  : undefined,
  //     email     : undefined,
  //     birthday  : undefined,
  //     isLoading : true,
  //     formValues: undefined
  //   }
  // },
  //
  [types.UPDATE_ADDRESS_DESCRIPTION] (state, index, description) {
    state.addresses[index].description = description
  },
  [types.UPDATE_ADDRESS_FIRSTNAME] (state, index, firstname) {
    state.addresses[index].firstname = firstname
  },
  [types.UPDATE_ADDRESS_LASTNAME] (state, index, lastname) {
    state.addresses[index].lastname = lastname
  },
  [types.UPDATE_ADDRESS_COUNTRY] (state, index, country) {
    state.addresses[index].country = country
  },
  [types.UPDATE_ADDRESS_STATE] (state, index, stateOfCustomer) {
    state.addresses[index].state = stateOfCustomer
  },
  [types.UPDATE_ADDRESS_STREET] (state, index, street) {
    state.addresses[index].street = street
  },
  [types.UPDATE_ADDRESS_CITY] (state, index, city) {
    state.addresses[index].city = city
  },
  [types.UPDATE_ADDRESS_ZIP] (state, index, zip) {
    state.addresses[index].zip = zip
  },
  [types.UPDATE_ADDRESS_PHONE] (state, index, phone) {
    state.addresses[index].phone = phone
  },
  [types.UPDATE_ADDRESS_IS_DEFAULT] (state, index, isDefault) {
    state.addresses[index].isDefault = isDefault
  },

  [types.UPDATE_NEW_ADDRESS_DESCRIPTION] (state, description) {
    state.newAddress.description = description
  },
  [types.UPDATE_NEW_ADDRESS_FIRSTNAME] (state, firstname) {
    state.newAddress.firstname = firstname
  },
  [types.UPDATE_NEW_ADDRESS_LASTNAME] (state, lastname) {
    state.newAddress.lastname = lastname
  },
  [types.UPDATE_NEW_ADDRESS_COUNTRY] (state, country) {
    state.newAddress.country = country
  },
  [types.UPDATE_NEW_ADDRESS_STATE] (state, stateOfCustomer) {
    state.newAddress.state = stateOfCustomer
  },
  [types.UPDATE_NEW_ADDRESS_STREET] (state, street) {
    state.newAddress.street = street
  },
  [types.UPDATE_NEW_ADDRESS_CITY] (state, city) {
    state.newAddress.city = city
  },
  [types.UPDATE_NEW_ADDRESS_ZIP] (state, zip) {
    state.newAddress.zip_code = zip
  },
  [types.UPDATE_NEW_ADDRESS_PHONE] (state, phone) {
    state.newAddress.phone = phone
  },
  [types.UPDATE_NEW_ADDRESS_IS_DEFAULT] (state, isDefault) {
    state.newAddress.isDefault = isDefault
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
