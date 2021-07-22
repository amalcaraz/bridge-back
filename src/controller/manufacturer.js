const { notFoundError } = require('../utils/error')
const { getManufacturers, getManufacturer } = require('../domain')

async function manufacturerGetAllController(req, res, next) {
  try {
    const { q, name, orderCif, orderName, orderAddress, page, limit } = req.query
    const manufacturers = await getManufacturers({ q, name, orderCif, orderName, orderAddress, page, limit })
    res.send(manufacturers);
  } catch (error) {
    next(error)
  }
}

async function manufacturerGetIdController(req, res, next) {
  try {
    const { manufacturerId } = req.params
    const manufacturer = await getManufacturer(manufacturerId)

    if (!manufacturer) {
      throw notFoundError
    }

    res.send(manufacturer);
  } catch (error) {
    next(error)
  }
}

module.exports = {
  manufacturerGetAllController,
  manufacturerGetIdController
}
