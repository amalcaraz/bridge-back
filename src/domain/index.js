const itemDomain = require('./item')
const manufacturerDomain = require('./manufacturer')

module.exports = {
  ...itemDomain,
  ...manufacturerDomain
}
