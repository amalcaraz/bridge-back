const cfg = require('config')
const express = require('express')
const app = express()
const appRouter = require('./route/index')
const dbAdapter = require('./utils/db')

async function start() {
  await startDb()
  await startApi()
}

async function startDb() {
  // TODO: Consider to move this to an external process running knex through CLI 
  // await dbAdapter.migrate.rollback()
  await dbAdapter.migrate.latest()
  await dbAdapter.seed.run();
}

async function startApi() {
  const port = cfg.get('port')

  return app
    .use(appRouter)
    .listen(port, () => {
      console.log(`App listening at http://localhost:${port}`)
    })
}

module.exports = {
  start
}