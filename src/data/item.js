const dbAdapter = require('../utils/db')

async function getItems() {
  return dbAdapter
    .select('id', 'name', 'relevance', 'price', 'manufacturer')
    .from('items')
}

module.exports = {
  getItems
}