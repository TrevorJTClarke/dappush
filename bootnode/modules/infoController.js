const redis = require('./redis')

class InfoController {
  constructor() {
    return this
  }

  async setRedis(req, res) {
    const { key, value } = req.body
    const data = await redis.set(key, value)
    res.json(data)
  }

  async getRedis(req, res) {
    const { key } = req.query
    const data = await redis.get(key)
    res.json(data)
  }
}

module.exports = new InfoController()
