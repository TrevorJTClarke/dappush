const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const http = require('http')
const app = new express()

// TESTING REDIS:
const sys = require('util')
const exec = require('child_process').exec

function puts(error, stdout, stderr) {
  if (error) console.log('redis error', error)
  sys.puts(stdout)
}

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

    exec('redis-server', puts)

    return app
  }
}

module.exports = Server
