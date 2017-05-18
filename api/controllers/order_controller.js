'use strict'

var db = require('../../models')

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  editOrderStatus
}

function getAllOrders (req, res) {
  db.Order.findAll()
    .then(function (arrayOfAllOrders) {
      return res.status(200).json({
        code   : 200,
        orders : arrayOfAllOrders
      })
    })
}

function getOrderById (req, res) {
  db.Order.findById(req.swagger.params.orderId.value)
    .then(function (orderObject) {
      if(!orderObject) {
        throw new Error()
      }

      return res.status(200).json({
        code  : 200,
        order : orderObject
      })
    })
    .catch(function (error) {
      return res.status(404).json({
        code    : 404,
        message : `Oops! There is no order with the Id [${req.swagger.params.orderId.value}]`
      })
    })
}

function createOrder (req, res) {
  const params = req.swagger.params
  db.Order.create({
    customer_id                : params.customer_id.value,
    customizations_of_order_id : params.customizations_of_order_id.value,
    is_active                  : params.is_active.value
  }).then(function (order) {
    return res.status(201).json({
      code  : 201,
      order : order
    })
  }).catch(function (error) {

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

function editOrderStatus (req, res) {
  const orderId    = req.swagger.params.orderId.value
  const params     = req.swagger.params
  let updatedOrder = { }

  for (const param in params) {
    if (param !== 'orderId' && params[param].value !== undefined) {
      updatedOrder[param] = params[param].value
    }
  }

  db.Order.update(updatedOrder, {
    where: {
      id: orderId
    }
  }).then(function (arrayOfRows) {
    db.Order.findById(orderId)
      .then(function (orderObject) {
        if(!orderObject) {
          return res.status(404).json({
            code    : 404,
            message : `Oops! There is no order with the id [${orderId}]`
          })
        }

        return res.json({
          code    : 200,
          message : `The user with the Id [${orderId}] was successfully updated !`,
          order   : orderObject
        })
      })
  }).catch(function (error) {
    console.log(error)
  })
}
