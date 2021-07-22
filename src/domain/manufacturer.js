const manufacturerDAL = require('../data/manufacturer')

async function getManufacturers(filters) {
  const { q, name, orderName, orderCif, orderAddress, page, limit } = filters
  return manufacturerDAL.getManufacturers({ q, name }, { orderName, orderCif, orderAddress }, { page, limit })
}

async function getManufacturer(id) {
  return manufacturerDAL.getManufacturer(id)
}

module.exports = {
  getManufacturers,
  getManufacturer
}