const { getItems } = require('../domain')

async function itemController(req, res, next) {
  try {
    const items = await getItems()
    res.send(items);
  } catch (error) {
    next(error)
  }
}

module.exports = itemController
