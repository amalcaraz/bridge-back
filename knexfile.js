const { config } = require('dotenv')
config()

const cfg = require('config')

module.exports = {
  client: cfg.get('db.client'),
  connection: {
    host: cfg.get('db.host'),
    user: cfg.get('db.user'),
    password: cfg.get('db.pass'),
    database: cfg.get('db.name')
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: cfg.get('db.migrations')
  }
}
