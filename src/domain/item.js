const itemDAL = require('../data/item')

async function getItems(filters) {
  const { q, name, manufacturerName, orderName, orderRelevance, orderPrice, orderManufacturerName, page, limit } = filters
  return itemDAL.getItems({ q, name, manufacturerName }, { orderName, orderRelevance, orderPrice, orderManufacturerName }, { page, limit })
}

async function getItem(id) {
  return itemDAL.getItem(id)
}

module.exports = {
  getItems,
  getItem
}
