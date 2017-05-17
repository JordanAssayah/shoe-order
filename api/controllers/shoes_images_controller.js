'use strict'

var fs         = require('fs')
var app        = require('../../app')
var express    = require('express')
var bodyParser = require('body-parser')
var multer     = require('multer')
var cors       = require('cors')
var path       = require('path')
var storage    = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = './shoes/' + req.body.modelName
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir)
      fs.chmodSync(dir, 777)
    }
    cb(null, dir)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/api/v1/shoes-images', function (req, res) {
  res.sendFile(path.resolve(__dirname,'../../shoes/',req.query.modelName + '/' + req.query.part + '.png'))
})

app.post('/api/v1/shoes-images/upload', upload.array('images'), function (req, res) {
  try {
    res.json({
      code: 201,
      message: 'All files were successfully uploaded !',
      files: req.files
    })
  } catch (e) {
    res.status(400).json({
      code: 400,
      message: 'Error',
      error: e
    })
  }
})
