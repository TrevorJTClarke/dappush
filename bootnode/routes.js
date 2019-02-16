const info = require('./modules/info')

module.exports = function routes(app) {
  app.use('/info', info)
}
