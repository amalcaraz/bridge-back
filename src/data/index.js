const itemDAL = require('./item')
const manufacturerDAL = require('./manufacturer')

module.exports = {
  ...itemDAL,
  ...manufacturerDAL
}