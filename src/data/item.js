const dbAdapter = require('../utils/db')
const { TableId, calculatePaginationInfo } = require('./common')

async function getItems(
  { q, name, manufacturerName },
  { orderName, orderRelevance, orderPrice, orderManufacturerName },
  { page = 0, limit = 10 }
) {
  // --- Common ---

  const commonQuery = dbAdapter
    .from(TableId.ITEMS)
    .join(TableId.MANUFACTURERS, `${TableId.ITEMS}.manufacturer`, `${TableId.MANUFACTURERS}.id`)

  if (q) {
    const likeStr = `%${q}%`
    commonQuery
      .whereRaw(`${TableId.ITEMS}.name ilike ?`, [likeStr])
      .orWhereRaw(`${TableId.MANUFACTURERS}.name ilike ?`, [likeStr])
  } else {
    if (name) {
      const likeStr = `%${name}%`
      commonQuery.whereRaw(`${TableId.ITEMS}.name ilike ?`, [likeStr])
    }

    if (manufacturerName) {
      const likeStr = `%${manufacturerName}%`
      commonQuery.whereRaw(`${TableId.MANUFACTURERS}.name ilike ?`, [likeStr])
    }
  }

  // --- Data ---

  const dataQuery = commonQuery
    .clone()
    .select(`${TableId.ITEMS}.id`, `${TableId.ITEMS}.name`, 'relevance', 'price', 'manufacturer', `${TableId.MANUFACTURERS}.name as manufacturerName`)

  if (orderName) {
    dataQuery.orderBy(`${TableId.ITEMS}.name`, orderName)
  }

  if (orderManufacturerName) {
    dataQuery.orderBy(`${TableId.MANUFACTURERS}.name`, orderManufacturerName)
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