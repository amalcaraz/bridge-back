const itemDAL = require('../data/item')

async function getItems() {
  return itemDAL.getItems()
}

module.exports = {
  getItems
}