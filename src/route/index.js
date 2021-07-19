const express = require('express')
const appRouter = express.Router()

const healthRouter = require('./health')
const itemRouter = require('./item')
const manufacturerRouter = require('./manufacturer')
const errorController = require('../controller/error')
const notFoundController = require('../controller/notFound')

appRouter
  .use('/health', healthRouter)
  .use('/items', itemRouter)
  .use('/manufacturers', manufacturerRouter)
  .use('*', notFoundController)
  .use(errorController)

module.exports = appRouter
