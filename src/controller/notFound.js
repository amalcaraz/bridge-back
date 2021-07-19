function errorController(req, res, next) {
  console.warn('👀  Not found: ', req.path)

  res
    .status(404)
    .json({ error: '404 Not Found' });
}

module.exports = errorController
