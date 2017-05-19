'use strict'

var db = require('../../models')
var _  = require('lodash')

module.exports = {
  getAllAddresses,
  getAddressById,
  createAddress,
  partialOrFullEditOfAddress,
  deleteAddressById
}

function getAllAddresses (req, res) {
  db.Address.findAll()
    .then(function (arrayOfAllAddresses) {
      return res.status(200).json({
        code      : 200,
        addresses : arrayOfAllAddresses
      })
    })
}

function getAddressById (req, res) {
  db.Address.findById(req.swagger.params.addressId.value)
    .then(function (addressObject) {
      if(!addressObject) {
        throw new Error()
      }

      return res.status(200).json({
        code    : 200,
        address : addressObject
      })
    })
    .catch(function (error) {
      return res.status(404).json({
        code    : 404,
        message : `Oops! There is no address with the Id [${req.swagger.params.addressId.value}]`
      })
    })
}

function createAddress (req, res) {
  const params = req.swagger.params
  console.log(params);

  let addressDataToCreate = {
    customer_id : params.customer_id.value,
    description : params.description.value,
    street      : params.street.value,
    country     : params.country.value,
    city        : params.city.value,
    zip_code    : params.zip_code.value,
    firstname   : params.firstname.value,
    lastname    : params.lastname.value,
    phone       : params.phone.value,
  }

  if (params.state.value !== undefined) {
    addressDataToCreate.state = params.state.value
  }

  db.Address.create(addressDataToCreate)
  .then(function (address) {
    return res.status(201).json({
      code    : 201,
      address : address
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

function partialOrFullEditOfAddress (req, res) {
  const addressId    = req.swagger.params.addressId.value
  const params       = req.swagger.params
  let updatedAddress = { }

  for (const param in params) {
    if (param !== 'addressId' && params[param].value !== undefined) {
      updatedAddress[param] = params[param].value
    }
  }

  console.log(updatedAddress)

  db.Address.update(updatedAddress, {
    where: {
      id: addressId
    }
  }).then(function (arrayOfRows) {
    db.Address.findById(addressId)
      .then(function (addressObject) {
        if(!addressObject) {
          return res.status(404).json({
            code    : 404,
            message : `Oops! There is no address with the id [${addressId}]`
          })
        }

        return res.json({
          code    : 200,
          message : `The address with the Id [${addressId}] was successfully updated !`,
          address : addressObject
        })
      })
  }).catch(function (error) {
    console.log(error)
  })
}

function deleteAddressById (req, res) {
  const addressId = req.swagger.params.addressId.value
  db.Address.findById(addressId)
    .then(function (addressObject) {
      if(!addressObject) {
        throw new Error()
      }

      db.Address.destroy({ where: { id: addressId } })
        .then(function (isAddressRemoved) {
          if (!isAddressRemoved) {
            throw new Error()
          }

          return res.json({
            code    : 200,
            message : `Address with the Id [${addressId}] was successfully deleted !`
          })
        })
    })
    .catch(function (error) {
      return res.status(404).json({
        code    : 404,
        message : `Oops! There is no address with the id [${addressId}]`
      })
    })
}
