const server = require('./server')
const routes = require('./routes')

const activePort = parseInt(process.env.PORT, 10) || 1337

const s = new server()

s.router(routes).listen(activePort)
