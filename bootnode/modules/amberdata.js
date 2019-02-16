const io = require('socket.io-client')

class Amberdata {
  constructor() {
    // TODO: setup connection to WS amberdata
    this.io = io(`wss://web3api.io?api_key=API_KEY_HERE`)

    this.io.on('connect', () => {
      console.log('io connect', this.io.connected, this.io.id)
    })

    this.io.on('connect_error', err => {
      console.log('io connect_error', err, this.io.connected, this.io.id)
    })

    return this
  }

  listen() {
    console.log('is connect', this.io.connected, this.io.id)
    // TODO: push into redis queue
    // this.io.on('news', (data) => {
    //   console.log(data);
    // })
  }
}

module.exports = new Amberdata()
