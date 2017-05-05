'use strict'

var db = require('../../models')
var usernameError = 'This username is not valid. Please check your credentials !'
var passwordError = 'This password is not valid. Please check your credentials !'

module.exports = { login }

function login(req, res) {
  var username = req.swagger.params.username.value
  var password = req.swagger.params.password.value

  if (username === '' || password === '') {
    return res.status(400).json({ code: 400, loggedIn: false, message: 'Please insert credentials !' })
  }

  var user = getUserByUsername(username)
  var

  console.log(user);
  if (user === undefined) {
    return res.status(400).json({ code: 400, loggedIn: false, message: 'This username does not exist !' })
  }
  var isPasswordValid = checkCredentials(user, password)


  if (user !== undefined) {
    if (isPasswordValid) {
      return res.json({
        code     : 200,
        loggedIn : true,
        message  : 'You\'re successfully logged in !'
      })
    }

    return res.status(400).json({ code: 400, loggedIn: false, message: passwordError })
  }

  return res.status(400).json({ code: 400, loggedIn: false, message: usernameError })
}

function getUserByUsername(username) {
  return db.user.findOne({where: {username: username}, raw: true})
    .then(function (userObject) {
      if (!userObject) {
        throw new Error()
      }

      return userObject
    })
    .catch(function (error) {
      return undefined
    })
}

function checkCredentials(userData, password) {
  console.log('checkCredentials method');
  console.log(userData);
  if (userData.password === password) {
    return true
  }

  return false
}
