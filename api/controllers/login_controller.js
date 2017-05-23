'use strict'

var db     = require('../../models')
var moment = require('moment')

var errorMessage = 'Please check your email or your password !'

module.exports = { login }

function login (req, res) {
  var email    = req.swagger.params.email.value
  var password = req.swagger.params.password.value

  if (email === '' || password === '') {
    return res.status(400).json({ code: 400, loggedIn: false, message: 'Please insert credentials !' })
  }

  getUserByEmail(email).then(function (user) {
    if (user === null) {
      return res.status(400).json({ code: 400, loggedIn: false, message: errorMessage })
    }
    var isPasswordValid = checkCredentials(user, password)

    /* eslint key-spacing: ["error", {
        "align": {
            "beforeColon": true,
            "afterColon": true,
            "on": "colon"
        }
    }] */

    if (isPasswordValid) {
      let date = moment().format('YYYY-MM-DDTHH:mm:ss.SSS') + 'Z'
      res.header('Access-Control-Allow-Credentials', true)
      res.header('Access-Control-Allow-Origin', req.headers.origin)
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
      res.header('Access-Control-Allow-Headers', 'Content-Type,Accept,X-Requested-With')
      res.cookie('email', email, { expires: new Date(date) })

      return res.json({
        code     : 200,
        loggedIn : true,
        message  : 'You\'re successfully logged in !'
      })
    }

    return res.status(400).json({ code: 400, loggedIn: false, message: errorMessage })
  })
}

function getUserByEmail (email) {
  return db.Customer.findOne({where: {email: email}})
    .then(function (userObject) {
      if (!userObject) {
        return userObject
      }

      return userObject.get({plain: true})
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
