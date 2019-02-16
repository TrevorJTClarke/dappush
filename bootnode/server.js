const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const http = require('http')
const ExpressPeerServer = require('peer').ExpressPeerServer
const amberdata = require('./modules/amberdata')

const app = new express()

const options = {
  debug: true
}

// REDIS: Every node needs it to sync the queue
const sys = require('util')
const exec = require('child_process').exec

function puts(error, stdout, stderr) {
  if (error) console.log('redis error', error)
  sys.puts(stdout)
}

// start redis immediately, because we always need it, and dont like boot errors
exec('redis-cli shutdown')
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

    // WEB RTC SETUP
    const peerserver = ExpressPeerServer(server, options)
    app.use('/peers', peerserver)

    // TODO: Manage the peer connections & associate to state channel
    peerserver.on('connection', id => {
      console.log('PEER CONN id:', id)
    })

    peerserver.on('disconnect', id => {
      console.log('PEER DIS id:', id)
    })

    amberdata.listen()

    return app
  }
}

module.exports = Server
