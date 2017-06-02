'use strict'

var db = require('../../models')
var _  = require('lodash')

var errorMessage = 'Please check your email or your password !'

/* eslint key-spacing: ["error", {
    "align": {
        "beforeColon": true,
        "afterColon": true,
        "on": "colon"
    }
}] */

module.exports = { login }

function login (req, res) {
  var email    = req.swagger.params.email.value
  var password = req.swagger.params.password.value

  if (email === '' || password === '') {
    return res.status(400).json({ code: 400, loggedIn: false, message: 'Please insert credentials !' })
  }

  getCustomerByEmail(email).then(function (customer) {
    if (customer === null) {
      console.log('k<ldvhdv,a<dvsdfghjsxghjkdcfhjfvbnm');
      getAdministratorByEmail(email).then(function (administrator) {
        if (administrator === null) {
          return res.status(400).json({
            code     : 400,
            loggedIn : false,
            message  : errorMessage
          })
        }
        console.log('dgkabg,kafgbkbsfg');
        var isPasswordValid = checkCredentials(administrator, password)

        if (isPasswordValid) {
          res.header('Access-Control-Allow-Credentials', true)
          res.header('Access-Control-Allow-Origin', req.headers.origin)
          res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
          res.header('Access-Control-Allow-Headers', 'Content-Type,Accept,X-Requested-With')

          _.unset(administrator, 'password')
          _.set(administrator, 'isAdmin', true)

          return res.json({
            code          : 200,
            loggedIn      : true,
            isAdmin       : true,
            administrator : administrator,
            message       : 'You\'re successfully logged in !'
          })
        }
      })
    }
    var isPasswordValid = checkCredentials(customer, password)

    if (isPasswordValid) {
      res.header('Access-Control-Allow-Credentials', true)
      res.header('Access-Control-Allow-Origin', req.headers.origin)
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
      res.header('Access-Control-Allow-Headers', 'Content-Type,Accept,X-Requested-With')
      res.cookie('email', email, { expires: new Date( Date.now() + 60 * 60 * 10000 ) })

      _.unset(customer, 'password')
      _.set(customer, 'isAdmin', false)

      return res.json({
        code     : 200,
        loggedIn : true,
        isAdmin  : false,
        customer : customer,
        message  : 'You\'re successfully logged in !'
      })
    }

    return res.status(400).json({ code: 400, loggedIn: false, message: errorMessage })
  })
}

function getCustomerByEmail (email) {
  return db.Customer.findOne({ where: { email: email } })
    .then(function (customerObject) {
      if (!customerObject) {
        return customerObject
      }

      return customerObject.get({ plain: true })
    })
    .catch(function () {
      return undefined
    })
}

function getAdministratorByEmail (email) {
  return db.Administrator.findOne({ where: { email: email } })
    .then(function (administratorObject) {
      if (!administratorObject) {
        return administratorObject
      }

      return administratorObject.get({ plain: true })
    })
    .catch(function () {
      return undefined
    })
}

function checkCredentials (userData, password) {
  if (userData.password === password) {
    return true
  }

  return false
}
