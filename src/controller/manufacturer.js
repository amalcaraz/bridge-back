const { getManufacturers } = require('../domain')

async function manufacturerController(req, res, next) {
  try {
    const { q, name, orderCif, orderName, orderAddress, page, limit } = req.query
    const manufacturers = await getManufacturers({ q, name, orderCif, orderName, orderAddress, page, limit })
    res.send(manufacturers);
  } catch (error) {
    next(error)
  }
}

module.exports = manufacturerController
