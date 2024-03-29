'use strict'

var db = require('../../models')

module.exports = {
  getAllCustomers,
  getCustomerById,
  getCustomerAddresses,
  getCustomerOrders,
  createCustomer,
  fullEditCustomer,
  partialEditCustomer,
  removeCustomer
}

function getAllCustomers (req, res) {
  db.Customer.findAll()
    .then(function (arrayOfAllCustomers) {
      return res.status(200).json({
        code      : 200,
        customers : arrayOfAllCustomers
      })
    })
}

function getCustomerById (req, res) {
  db.Customer.findById(req.swagger.params.customerId.value)
    .then(function (customerObject) {
      if(!customerObject) {
        throw new Error()
      }

      // Because we don't want to sho the password in an HTTP request
      const customerToShow = {
        id              : customerObject.id,
        firstname       : customerObject.firstname,
        lastname        : customerObject.lastname,
        email           : customerObject.email,
        birthdate       : customerObject.birthdate,
        current_address : customerObject.current_address,
        is_active       : customerObject.is_active,
        created_at      : customerObject.created_at,
        updated_at      : customerObject.updated_at
      }

      return res.status(200).json({
        code     : 200,
        customer : customerToShow
      })
    })
    .catch(function (error) {
      return res.status(404).json({
        code    : 404,
        message : `Oops! There is no user with the Id [${req.swagger.params.customerId.value}]`
      })
    })
}

function getCustomerAddresses (req, res) {
  const customerId = req.swagger.params.customerId.value

  db.Address.findAll({ where: { customer_id: customerId } })
    .then(function (arrayOfAllAddressesOfCustomer) {
      return res.status(200).json({
        code      : 200,
        addresses : arrayOfAllAddressesOfCustomer
      })
    })
}

function getCustomerOrders (req, res) {
  const customerId = req.swagger.params.customerId.value
  db.Order.findAll({ where: { customer_id: customerId } })
    .then(function (arrayOfAllOrdersOfCustomer) {
      return res.status(200).json({
        code   : 200,
        orders : arrayOfAllOrdersOfCustomer
      })
    })
}

function createCustomer (req, res) {
  const params = req.swagger.params

  let customerDataToCreate = {
    email     : params.email.value,
    password  : params.password.value,
    firstname : params.firstname.value,
    lastname  : params.lastname.value,
    birthdate : new Date(params.birthdate.value),
    is_active : params.is_active.value,
  }

  if (params.current_address.value !== undefined) {
    customerDataToCreate.current_address = params.current_address.value
  }

  db.Customer.create(customerDataToCreate)
  .then(function (customer) {
    return res.status(201).json({
      code: 201,
      customer: customer
    })
  }).catch(function (error) {

    console.log(error);

    let messages = [ ]
    let fields   = [ ]

    for (let i = 0; i < error.errors.length; i++) {
      fields.push(error.errors[i].path)
    }

    for (let i = 0; i < error.errors.length; i++) {
      messages.push(error.errors[i].message)
    }

    return res.status(400).json({
      code     : 400,
      type     : error.errors[0].type,
      messages : messages,
      fields   : fields
    })
  })
}

function fullEditCustomer(req, res) {
  const customerId = req.swagger.params.customerId.value
  const params     = req.swagger.params
  db.Customer.update({
    email     : params.email.value,
    password  : params.password.value,
    firstname : params.firstname.value,
    lastname  : params.lastname.value,
    birthdate : params.birthdate.value,
  }, {
    where: {
      id: customerId
    }
  }).then(function (arrayOfRows) {
    db.Customer.findById(customerId)
      .then(function (customerObject) {
        if(!customerObject) {
          return res.status(404).json({
            code    : 404,
            message : `Oops! There is no customer with the id [${customerId}]`
          })
        }

        return res.json({
          code     : 200,
          message  : `The customer with the Id [${customerId}] was successfully updated !`,
          customer : customerObject
        })
      })
  }).catch(function (error) {
    console.log(error)
  })
}

function partialEditCustomer (req, res) {
  const customerId = req.swagger.params.customerId.value
  const params     = req.swagger.params
  let updatedCustomer = { }

  for (const param in params) {
    if (param !== 'customerId' && params[param].value !== undefined) {
      updatedCustomer[param] = params[param].value
    }
  }

  console.log(updatedCustomer)

  db.Customer.update(updatedCustomer, {
    where: {
      id: customerId
    }
  }).then(function (arrayOfRows) {
    db.Customer.findById(customerId)
      .then(function (customerObject) {
        if(!customerObject) {
          return res.status(404).json({
            code    : 404,
            message : `Oops! There is no user with the id [${customerId}]`
          })
        }

        return res.json({
          code     : 200,
          message  : `The user with the Id [${customerId}] was successfully updated !`,
          customer : customerObject
        })
      })
  }).catch(function (error) {
    console.log(error)
  })
}

function removeCustomer (req, res) {
  const customerId = req.swagger.params.customerId.value
  db.Customer.destroy({ where: { id: customerId } })
    .then(function (isCustomerRemoved) {
      if (!isCustomerRemoved) {
        throw new Error()
      }

      return res.json({
        code    : 200,
        message : `Customer with the Id [${customerId}] was successfully deleted !`
      })
    })
    .catch(function (error) {
      return res.status(404).json({
        code    : 404,
        message : `Oops! There is no customer with the id [${customerId}]`
      })
    })
}
