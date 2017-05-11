'use strict'

var db = require('../../models')

module.exports = { createArticle }

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

    console.log('WIHVDFOHJADVSFLASVASDVBLASDVHLASDHVHASLD');
    console.log('WIHVDFOHJADVSFLASVASDVBLASDVHLASDHVHASLD');
    console.log('WIHVDFOHJADVSFLASVASDVBLASDVHLASDHVHASLD');
    console.log('WIHVDFOHJADVSFLASVASDVBLASDVHLASDHVHASLD');
    console.log(error);
    console.log('WIHVDFOHJADVSFLASVASDVBLASDVHLASDHVHASLD');
    console.log('WIHVDFOHJADVSFLASVASDVBLASDVHLASDHVHASLD');
    console.log('WIHVDFOHJADVSFLASVASDVBLASDVHLASDHVHASLD');
    console.log('WIHVDFOHJADVSFLASVASDVBLASDVHLASDHVHASLD');

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
