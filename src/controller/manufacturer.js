const { getManufacturers } = require('../domain')

async function manufacturerController(req, res) {
  try {
    const manufacturers = await getManufacturers()
    res.send(manufacturers);
  } catch (error) {
    next(error)
  }
}

module.exports = manufacturerController
