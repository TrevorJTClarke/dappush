const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const http = require('http')

const app = new express()

class Server {
  constructor() {
    app.disable('x-powered-by')
  }

  router(routes) {
    routes(app)
    return this
  }

  listen(port = parseInt(process.env.PORT, 10)) {
    const server = http.createServer(app)
    server.listen(port, () => {
      console.log(`up and running in ${process.env.NODE_ENV || 'development'} on port: ${port}`)
    })

    return app
  }
}

module.exports = Server
