function healthController(req, res, next) {
  res.status(200).json({ alive: true })
}

module.exports = healthController
