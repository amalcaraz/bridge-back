const express = require('express')
const itemRouter = express.Router()
const itemController = require('../controller/item')

itemRouter.get('/', itemController)

module.exports = itemRouter
