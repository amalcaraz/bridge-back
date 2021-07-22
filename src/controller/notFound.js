const { notFoundError } = require('../utils/error')

function errorController(req, res, next) {
  next(notFoundError)
}

module.exports = errorController
