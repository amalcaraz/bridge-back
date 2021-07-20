const dbAdapter = require('../utils/db')
const { calculatePaginationInfo } = require('./common')

async function getManufacturers(
  { q, name },
  { orderName, orderCif, orderAddress },
  { page = 0, limit = 10 }
) {
  q = q || name

  // --- Common ---

  const commonQuery = dbAdapter.from('manufacturers')

  if (q) {
    const likeStr = `%${q}%`
    commonQuery.whereRaw('name ilike ?', [likeStr])
  }

  // --- Data ---

  const dataQuery = commonQuery
    .clone()
    .select('id', 'name', 'cif', 'address')

  if (orderName) {
    dataQuery.orderBy('name', orderName)
  }

  if (orderCif) {
    dataQuery.orderBy('cif', orderCif)
  }

  if (orderAddress) {
    dataQuery.orderBy('address', orderAddress)
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

module.exports = {
  getManufacturers
}