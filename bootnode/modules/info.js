const express = require('express')
const infoController = require('./infoController')

module.exports = express
  .Router()
  .get('/', (req, res) => {
    // generic node info, checking node current state/IDs
    // TODO: Return bootnode contracts
    res.json({
      id: '0x242n4...',
      channelId: 'fjkdsljfkdlsj',
      index: 0
    })
  })
  .get('/redis', infoController.getRedis)
  .post('/redis', infoController.setRedis)
  .get('/redispop', infoController.popRedis)
  .post('/redispush', infoController.pushRedis)
