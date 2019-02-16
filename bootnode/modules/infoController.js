const redis = require('./redis')

class InfoController {
  constructor() {
    this.redis = redis
    console.log('this.redis', this.redis)
    this.redis.connect()
    return this
  }

  async setRedis(req, res) {
    const { key, value } = req.body
    const data = await this.redis.set(key, value)
    res.json(data)
  }
}


module.exports = new InfoController()
