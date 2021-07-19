const express = require('express')
const app = express()
const appRouter = require('./route/index')

function startApi(port = 3000) {
  app
    .use(appRouter)
    .listen(port, () => {
      console.log(`App listening at http://localhost:${port}`)
    })
}

module.exports = {
  startApi
}