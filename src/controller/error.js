function errorController(error, req, res, next) {
  console.error('🅾️  Error: ', error.message)

  res
    .status(500)
    .json({ error: error.message });
}

module.exports = errorController
