const manufacturerDAL = require('../data/manufacturer')

async function getManufacturers() {
  return manufacturerDAL.getManufacturers()
}

module.exports = {
  getManufacturers
}