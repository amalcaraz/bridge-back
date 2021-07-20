const itemDAL = require('../data/item')

async function getItems(filters) {
  const { q, name, manufacturerName, orderName, orderRelevance, orderPrice, page, limit } = filters
  return itemDAL.getItems({ q, name, manufacturerName }, { orderName, orderRelevance, orderPrice }, { page, limit })
}

module.exports = {
  getItems
}