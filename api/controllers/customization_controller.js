'use strict'

var db = require('../../models')
var _  = require('lodash')

module.exports = {
  getAllCustomizations,
  getCustomizationById,
  createCustomization,
  fullEditOfCustomization,
  deleteCustomizationById
}

function getAllCustomizations (req, res) {
  db.Customization.findAll()
    .then(function (arrayOfAllCustomizations) {
      return res.status(200).json({
        code           : 200,
        customizations : arrayOfAllCustomizations
      })
    })
}

function getCustomizationById (req, res) {
  db.Customization.findById(req.swagger.params.customizationId.value)
    .then(function (customizationObject) {
      if(!customizationObject) {
        throw new Error()
      }

      return res.status(200).json({
        code          : 200,
        customization : customizationObject
      })
    })
    .catch(function (error) {
      return res.status(404).json({
        code    : 404,
        message : `Oops! There is no customization with the Id [${req.swagger.params.customizationId.value}]`
      })
    })
}

function createCustomization (req, res) {
  const customizationObject = req.swagger.params.customization.value

  db.Customization.create({
    article_id    : customizationObject.article_id,
    customer_id   : customizationObject.customer_id,
    customization : customizationObject.customization,
  }).then(function (customization) {
    return res.status(201).json({
      code          : 201,
      customization : customization
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

function fullEditOfCustomization (req, res) {
  const customizationId    = req.swagger.params.customizationId.value
  const requesteqObject    = req.swagger.params.customization.value
  const newCustomization   = requesteqObject.customization
  let updatedCustomization = { }

  db.Customization.findById(customizationId)
    .then(function (customizationObject) {
      if(!customizationObject) {
        return res.status(404).json({
          code    : 404,
          message : `Oops! There is no customization with the id [${customizationId}]`
        })
      }


      _.mapKeys(customizationObject.get({ plain: true }), function(value, key) {
        console.log(key);
        if (key !== 'customization' && key !== 'created_at' && key !== 'updated_at') {
          updatedCustomization[key] = value
        }
        updatedCustomization.customization = newCustomization
      })

      db.Customization.update(updatedCustomization, {
        where: {
          id: customizationId
        }
      }).then(function (arrayOfRows) {
        return res.status(200).json({
          code          : 200,
          message       : `The customization with the Id [${customizationId}] was successfully updated !`,
          customization : updatedCustomization
        })
      }).catch(function (error) {
        console.log(error)
      })
    })
}

function deleteCustomizationById (req, res) {
  const customizationId = req.swagger.params.customizationId.value
  db.Customization.findById(customizationId)
    .then(function (customizationObject) {
      if(!customizationObject) {
        throw new Error()
      }

      db.Customization.destroy({ where: { id: customizationId } })
        .then(function (isCustomizationRemoved) {
          if (!isCustomizationRemoved) {
            throw new Error()
          }

          return res.json({
            code    : 200,
            message : `customization with the Id [${customizationId}] was successfully deleted !`
          })
        })
    })
    .catch(function (error) {
      return res.status(404).json({
        code    : 404,
        message : `Oops! There is no customization with the id [${customizationId}]`
      })
    })
}
