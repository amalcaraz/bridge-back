const TableId = Object.freeze({
  ITEMS: 'items',
  MANUFACTURERS: 'manufacturers',
})

function calculatePaginationInfo(current, limit, count) {
  current = Number(current)
  limit = Number(limit)
  count = Number(count)

  const last = Math.floor(count / limit)
  const prev = current - 1
  const next = current + 1

  const pagination = {
    count,
    current,
    last,
  }

  if (prev >= 0) {
    pagination.prev = prev
  }

  if (next <= last) {
    pagination.next = next
  }

  return pagination
}

module.exports = {
  TableId,
  calculatePaginationInfo
}
