const express = require('express')
const manufacturerRouter = express.Router()
const { manufacturerGetAllController, manufacturerGetIdController } = require('../controller/manufacturer')

manufacturerRouter
  .get('/', manufacturerGetAllController)
  .get('/:manufacturerId', manufacturerGetIdController)

module.exports = manufacturerRouter
