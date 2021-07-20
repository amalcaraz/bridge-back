const config = require('config')

function healthController(req, res, next) {
  res.status(200).json({
    id: config.get('id'),
    alive: true
  })
}

module.exports = healthController
