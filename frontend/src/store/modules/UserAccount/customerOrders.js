// import * as types from '../../mutations-types'
// import _ from 'lodash'
//
// // initial state
// /* eslint key-spacing: ["error", { "align": "colon" }] */
// const state = {
//   basicCustomerData: {
//     firstname : undefined,
//     lastname  : undefined,
//     email     : undefined,
//     birthday  : undefined,
//     isLoading : true,
//     formValues: {}
//   }
// }
//
// // getters
// const getters = {
//   basicCustomerData: state => state.basicCustomerData,
//   addresses        : state => state.addresses,
//   orders           : state => state.orders
// }
//
// // actions
// const actions = {
//   getBasicCustomerData ({ commit }, customerId) {
//     fetch(`http://localhost:10010/api/v1/customers/${customerId}`, { method: 'GET' })
//       .then(success => success.json())
//       .then(customerResponse => {
//         if (customerResponse.code === 200) {
//           commit(types.UPDATE_BASIC_CUSTOMER_DATA, customerResponse.customer)
//         }
//       })
//   },
//   clearCustomerData ({ commit }) {
//     commit(types.CLEAR_CUSTOMER_DATA)
//   },
//   updateCustomerFirstname ({ commit }, firstname) {
//     commit(types.UPDATE_CUSTOMER_FIRSTNAME, firstname)
//   },
//   updateCustomerLastname ({ commit }, lastname) {
//     commit(types.UPDATE_CUSTOMER_LASTNAME, lastname)
//   },
//   saveModifications ({ commit, state }, customerId) {
//     const newCustomerData = new FormData()
//     _.mapKeys(state.basicCustomerData.formValues, (value, key) => {
//       newCustomerData.append(key, value)
//     })
//     fetch(`http://localhost:10010/api/v1/customers/${customerId}`, {
//       method: 'PATCH',
//       body  : newCustomerData
//     })
//       .then(success => success.json())
//       .then(customerResponse => {
//         if (customerResponse.code === 200) {
//           commit(types.SAVE_CUSTOMER_MODIFICATIONS)
//         }
//       })
//   }
// }
//
// // mutations
// const mutations = {
//
//   [types.UPDATE_BASIC_CUSTOMER_DATA] (state, customerData) {
//     const {
//       firstname,
//       lastname,
//       email,
//       birthdate
//     } = customerData
//
//     state.basicCustomerData = {
//       firstname,
//       lastname,
//       email,
//       birthday  : birthdate,
//       isLoading : false,
//       formValues: {
//         firstname,
//         lastname
//       }
//     }
//   },
//
//   [types.CLEAR_CUSTOMER_DATA] (state) {
//     state.basicCustomerData = {
//       firstname : undefined,
//       lastname  : undefined,
//       email     : undefined,
//       birthday  : undefined,
//       isLoading : true,
//       formValues: undefined
//     }
//   },
//
//   [types.UPDATE_CUSTOMER_FIRSTNAME] (state, firstname) {
//     state.basicCustomerData.formValues.firstname = firstname
//   },
//
//   [types.UPDATE_CUSTOMER_LASTNAME] (state, lastname) {
//     state.basicCustomerData.formValues.lastname = lastname
//   },
//
//   [types.SAVE_CUSTOMER_MODIFICATIONS] (state) {
//     _.mapKeys(state.basicCustomerData.formValues, (value, key) => {
//       if (value !== undefined || value !== '') {
//         state.basicCustomerData[key] = value
//       }
//     })
//     state.basicCustomerData.formValues = {}
//
//     document.querySelector('.form-firstname').value = ''
//     document.querySelector('.form-lastname').value  = ''
//   }
// }
//
// export default {
//   state,
//   getters,
//   actions,
//   mutations
// }
