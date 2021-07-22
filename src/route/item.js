const express = require('express')
const itemRouter = express.Router()
const { itemGetAllController, itemGetIdController } = require('../controller/item')

itemRouter
  .get('/', itemGetAllController)
  .get('/:itemId', itemGetIdController)

module.exports = itemRouter
