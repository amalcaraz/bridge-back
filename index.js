const { config } = require('dotenv')
const { startApi } = require('./src/api')

config()
startApi()