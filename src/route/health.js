const express = require('express')
const healthRouter = express.Router()
const healthController = require('../controller/health')

healthRouter.get('/', healthController)

module.exports = healthRouter
