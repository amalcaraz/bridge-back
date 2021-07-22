const { notFoundError } = require('../utils/error')
const { getItems, getItem } = require('../domain')

async function itemGetAllController(req, res, next) {
  try {
    const { q, name, manufacturerName, orderName, orderRelevance, orderPrice, page, limit } = req.query
    const items = await getItems({ q, name, manufacturerName, orderName, orderRelevance, orderPrice, page, limit })
    res.send(items);
  } catch (error) {
    next(error)
  }
}

async function itemGetIdController(req, res, next) {
  try {
    const { itemId } = req.params
    const item = await getItem(itemId)

    if (!item) {
      throw notFoundError
    }

    res.send(item);
  } catch (error) {
    next(error)
  }
}

module.exports = {
  itemGetAllController,
  itemGetIdController
}
