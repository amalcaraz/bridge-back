function calculatePaginationInfo(current, limit, count) {
  current = Number(current)
  limit = Number(limit)

  const last = Math.floor(count / limit)
  const prev = current - 1
  const next = current + 1

  const pagination = {
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
  calculatePaginationInfo
}