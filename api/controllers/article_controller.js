'use strict'

var db = require('../../models')

module.exports = { getAllArticles, getArticleById, createArticle, deleteArticleById }

function getAllArticles (req, res) {
  db.Article.findAll()
    .then(function (arrayOfAllArticles){
      return res.status(200).json({
        code     : 200,
        articles : arrayOfAllArticles
      })
    })
}

function getArticleById (req, res) {
  db.Article.findById(req.swagger.params.articleId.value)
    .then(function (articleObject) {
      if(!articleObject) {
        throw new Error()
      }

      return res.json({ article: articleObject })
    })
    .catch(function (error) {
      return res.status(404).json({ code: 404, message: `Oops! There is no article with the Id [${req.swagger.params.articleId.value}]` })
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
    sizes            : articleObject.sizes,
    colors           : articleObject.colors,
  }).then(function (article) {
    return res.status(201).json({
      code    : 201,
      article : article.get({plain: true})
    })
  }).catch(function (error) {
    return res.status(400).json({
      code    : 400,
      message : error.parent.detail
    })

  })
}

function deleteArticleById (req, res) {
  const articleId = req.swagger.params.articleId.value
  db.Article.destroy({ where: { id: articleId } })
    .then(function (isArticleRemoved) {
      if (!isArticleRemoved) {
        throw new Error()
      }

      return res.json({
        code    : 200,
        message : `Article with the Id [${articleId}] was successfully deleted !`
      })
    })
    .catch(function (error) {
      return res.status(404).json({
        code    : 404,
        message : `Oops! There is no article with the id [${articleId}]`
      })
    })
}
