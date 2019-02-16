const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const http = require('http')
const app = new express()

// REDIS: Every node needs it to sync the queue
const sys = require('util')
const exec = require('child_process').exec

function puts(error, stdout, stderr) {
  if (error) console.log('redis error', error)
  sys.puts(stdout)
}

// start redis immediately, because we always need it, and dont like boot errors
exec('redis-server', puts)

// var PeerServer = require('peer').PeerServer
// var server = PeerServer({port: parseInt(process.env.RTC_PORT, 10), path: '/myapp'})

// NOTE: Here is the order of initialization
// TODO:
// 1. load args into global/config args (See .env && .env.example)
// 2. intilize server & routes
// 3. If BOOTNODE MASTER:
//    A. initialize redis
//    B. initialize web rtc
// 4. If BOOTNODE PARTICIPANT:
//    A. Deploy new Adjudicator contract with a stake

class Server {
  constructor() {
    app.use(bodyParser.json())
    app.disable('x-powered-by')
  }

  // initialize routes!
  router(routes) {
    routes(app)
    return this
  }

  listen(port = parseInt(process.env.PORT, 10)) {
    const server = http.createServer(app)
    server.listen(port, () => {
      console.log(`Bootnode running - ${process.env.NODE_ENV || 'development'} http://localhost:${port}`)
    })

    return app
  }
}

module.exports = Server
