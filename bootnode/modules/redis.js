const redis = require('redis')

class RedisProvider {
  constructor() {
    this.client = null
    this.status = null

    return this
  }

  disconnect() {
    this.client.quit()
  }

  connect() {
    this.client = redis.createClient()

    // errors? sure, lets see em
    this.client.on('error', err => {
      this.status = 'error'
      console.log(err)
    })

    this.client.on('ready', () => {
      this.status = 'ready'
      console.log('REDIS: ready')
    })

    return this.client
  }

  // NOTE: TBD if I hash the data?
  set(key, value) {
    if (!this.client) return Promise.resolve(null)
    return new Promise((resolve, reject) => {
      this.client.set(key, value, () => {
        // callback
        console.log('redis.print', redis.print)
        resolve(redis.print)
      })
    })
  }

  get(key) {
    if (!this.client) return Promise.resolve(null)
    return new Promise((resolve, reject) => {
      this.client.get("missingkey", (err, reply) => {
        if (err) {
          reject(err)
          return
        }

        // reply is null when the key is missing
        console.log(reply)
        resolve(reply)
      })
    })
  }

  sync() {
    // TODO:
    // replicate entirety of redis data to this node
  }
}

module.exports = new RedisProvider()
