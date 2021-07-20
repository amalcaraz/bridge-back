const cfg = require('config')

function healthController(req, res, next) {
  res.status(200).json({
    id: cfg.get('id'),
    alive: true
  })
}

module.exports = healthController
