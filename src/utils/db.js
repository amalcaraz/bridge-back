const pg = require('pg')
const knex = require('knex')
const knexConfig = require('../../knexfile')

// NOTE: https://stackoverflow.com/a/45570147
const { NUMERIC } = pg.types.builtins
pg.types.setTypeParser(NUMERIC, parseFloat)

module.exports = knex(knexConfig)
