const dbAdapter = require('../utils/db')

async function getManufacturers() {
  return dbAdapter
    .select('id', 'name', 'cif', 'address')
    .from('manufacturers')
}

module.exports = {
  getManufacturers
}