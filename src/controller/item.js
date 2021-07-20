const { getItems } = require('../domain')

async function itemController(req, res, next) {
  try {
    const { q, name, manufacturerName, orderName, orderRelevance, orderPrice, page, limit } = req.query
    const items = await getItems({ q, name, manufacturerName, orderName, orderRelevance, orderPrice, page, limit })
    res.send(items);
  } catch (error) {
    next(error)
  }
}

module.exports = itemController
