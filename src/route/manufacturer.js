const express = require('express')
const manufacturerRouter = express.Router()
const manufacturerController = require('../controller/manufacturer')

manufacturerRouter.get('/', manufacturerController)

module.exports = manufacturerRouter
