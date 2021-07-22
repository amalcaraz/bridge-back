const dbAdapter = require('../utils/db')
const { TableId, calculatePaginationInfo } = require('./common')

async function getItems(
  { q, name, manufacturerName },
  { orderName, orderRelevance, orderPrice },
  { page = 0, limit = 10 }
) {
  // --- Common ---

  const commonQuery = dbAdapter.from(TableId.ITEMS)

  if (q) {
    const likeStr = `%${q}%`
    commonQuery
      .join(TableId.MANUFACTURERS, 'items.manufacturer', 'manufacturers.id')
      .whereRaw('items.name ilike ?', [likeStr])
      .orWhereRaw('manufacturers.name ilike ?', [likeStr])
  } else {
    if (name) {
      const likeStr = `%${name}%`
      commonQuery.whereRaw('items.name ilike ?', [likeStr])
    }

    if (manufacturerName) {
      const likeStr = `%${manufacturerName}%`
      commonQuery
        .join(TableId.MANUFACTURERS, 'items.manufacturer', 'manufacturers.id')
        .whereRaw('manufacturers.name ilike ?', [likeStr])
    }
  }

  // --- Data ---

  const dataQuery = commonQuery
    .clone()
    .select('items.id', 'items.name', 'relevance', 'price', 'manufacturer')

  if (orderName) {
    dataQuery.orderBy('name', orderName)
  }

  if (orderRelevance) {
    dataQuery.orderBy('relevance', orderRelevance)
  }

  if (orderPrice) {
    dataQuery.orderBy('price', orderPrice)
  }

  if (page) {
    dataQuery.offset(limit * page)
  }

  if (limit) {
    dataQuery.limit(limit)
  }

  // --- Pagination ---

  const paginationQuery = commonQuery
    .clone()
    .count('*')

  // --- Execution ---

  const [data, [{ count }]] = await Promise.all([dataQuery, paginationQuery])
  const pagination = calculatePaginationInfo(page, limit, count)

  return {
    pagination,
    data
  }
}

async function getItem(id) {
  const [item] = await dbAdapter
    .select('id', 'name', 'relevance', 'price', 'manufacturer')
    .from(TableId.ITEMS)
    .where('id', id)

  return item
}

module.exports = {
  getItems,
  getItem
}