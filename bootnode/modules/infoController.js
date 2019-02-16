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

  async pushRedis(req, res) {
    const { key, value } = req.body
    const data = await redis.push(key, value)
    res.json(data)
  }

  async popRedis(req, res) {
    const { key } = req.query
    const data = await redis.pop(key)
    res.json(data)
  }
}

module.exports = new InfoController()
