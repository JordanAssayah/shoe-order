'use strict'

var db = require('../../models')

module.exports = { createAdmin }

function createAdmin (req, res) {
  const params = req.swagger.params
  db.Administrator.create({
    password  : params.password.value,
    firstname : params.firstname.value,
    lastname  : params.lastname.value,
    email     : params.email.value,
  }).then(function (administrator) {
    return res.status(201).json({
      code: 201,
      administrator: administrator
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
