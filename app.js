'use strict'

var SwaggerExpress = require('swagger-express-mw')
var express        = require('express')
var helmet         = require('helmet')
var app            = express()
module.exports     = app // for testing

var config = {
  appRoot: __dirname // required config
}

SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) { throw err }

  // install middleware
  swaggerExpress.register(app)

  var port = process.env.PORT || 10010
  app.set('json spaces', 2)

  app.use('/shoes', express.static('./shoes'))      // Let lambda user access to images
  app.use('/api/v1', express.static('./swaggerUI')) // Let logged in users access to the api
  app.get('/api/v1', function (req, res) {
    res.sendFile(__dirname + '/swaggerUI/')         // Load the swaggerUI temlplate
  })

  // See https://expressjs.com/en/advanced/best-practice-security.html
  app.use(helmet())
  app.listen(port)
})
