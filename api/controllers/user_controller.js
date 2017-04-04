'use strict'

var db = require('../../models')

module.exports = { getAll, getUserById, create, fullEdit, partialEdit, remove }

function getAll(req, res) {
  db.user.findAll()
    .then(function (arrayOfAllUsers){
      return res.json({ users: arrayOfAllUsers })
    })
    .catch(function (error) {
      return res.json({ message: error })
    })
}

function getUserById(req, res) {
  db.user.findById(req.swagger.params.userId.value)
    .then(function (userObject) {
      if(!userObject) {
        throw new Error()
      }
      
      return res.json({ user: userObject })
    })
    .catch(function (error) {
      return res.status(404).json({ code: 404, message: `Oops! There is no user with the Id [${req.swagger.params.userId.value}]` })
    })
}

function create(req, res) {
  const params = req.swagger.params
  db.user.create({
    username  : params.username.value,
    password  : params.password.value,
    firstname : params.firstname.value,
    lastname  : params.lastname.value,
    email     : params.email.value,
    birthdate : params.birthdate.value,
    country   : params.country.value,
    state     : params.state.value,
    phone     : params.phone.value
  }).then(function (user) {
    return res.status(201).json({ code: 201, user: user })
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

function fullEdit(req, res) {
  const userId = req.swagger.params.userId.value
  const params = req.swagger.params
  db.user.update({
    username  : params.username.value,
    password  : params.password.value,
    firstname : params.firstname.value,
    lastname  : params.lastname.value,
    email     : params.email.value,
    birthdate : params.birthdate.value,
    country   : params.country.value,
    state     : params.state.value,
    phone     : params.phone.value
  }, { 
    where: {
      id: userId 
    }
  }).then(function (arrayOfRows) {
    db.user.findById(userId)
      .then(function (userObject) {
        if(!userObject) {
          return res.status(404).json({
            code    : 404,
            message : `Oops! There is no user with the id [${userId}]`
          })
        }
        
        return res.json({
          code    : 200,
          message : `The user with the Id [${userId}] was successfully updated !`,
          user    : userObject
        })
      })
  }).catch(function (error) {
    console.log(error)
  })
}

function partialEdit(req, res) {
  const userId    = req.swagger.params.userId.value
  const params    = req.swagger.params
  let updatedUser = { }

  for (const param in params) {
    if (param !== 'userId' && params[param].value !== undefined) {
      updatedUser[param] = params[param].value
    }
  }

  console.log(updatedUser)

  db.user.update(updatedUser, { 
    where: {
      id: userId 
    }
  }).then(function (arrayOfRows) {
    db.user.findById(userId)
      .then(function (userObject) {
        if(!userObject) {
          return res.status(404).json({
            code    : 404,
            message : `Oops! There is no user with the id [${userId}]`
          })
        }

        return res.json({
          code    : 200,
          message : `The user with the Id [${userId}] was successfully updated !`,
          user    : userObject
        })
      })
  }).catch(function (error) {
    console.log(error)
  })
}

function remove(req, res) {
  const userId = req.swagger.params.userId.value
  db.user.destroy({ where: { id: userId } })
    .then(function (isUserRemoved) {
      if (!isUserRemoved) {
        throw new Error()
      }

      return res.json({ 
        code    : 200,
        message : `User with the Id [${userId}] was successfully deleted !`
      })
    })
    .catch(function (error) {
      return res.status(404).json({
        code    : 404,
        message : `Oops! There is no user with the id [${userId}]`
      })
    })
}
