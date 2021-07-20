const manufacturerDAL = require('../data/manufacturer')

async function getManufacturers(filters) {
  const { q, name, orderName, orderCif, orderAddress, page, limit } = filters
  return manufacturerDAL.getManufacturers({ q, name }, { orderName, orderCif, orderAddress }, { page, limit })
}

module.exports = {
  getManufacturers
}