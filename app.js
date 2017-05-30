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

  app.use('/api/v1', express.static('./swaggerUI'))
  app.get('/api/v1', function (req, res) {
    res.sendFile(__dirname + '/swaggerUI/')
  })

  app.use(helmet())
  app.listen(port)

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/api/v1/hello?name=Scott')
  }
})
