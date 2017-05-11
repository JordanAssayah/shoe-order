'use strict'

var db = require('../../models')

module.exports = { getAllArticles, createArticle }

function getAllArticles (req, res) {
  db.Article.findAll()
    .then(function (arrayOfAllArticles){
      return res.json({ articles: arrayOfAllArticles })
    })
    .catch(function (error) {
      return res.json({ articles: [] })
    })
}

function createArticle (req, res) {
  const articleObject = req.swagger.params.article.value
  db.Article.create({
    administrator_id : articleObject.administrator_id,
    name             : articleObject.name,
    description      : articleObject.description,
    price            : articleObject.price,
    parts            : articleObject.parts,
  }).then(function (article) {
    return res.status(201).json({
      code: 201,
      article: article
    })
  }).catch(function (error) {
    return res.status(400).json({
      code    : 400,
      message : error.parent.detail
    })

  })
}
