function errorController(error, req, res, next) {
  console.error('🅾️  Error: ', error)

  res
    .status(500)
    .json({ error });
}

module.exports = errorController
