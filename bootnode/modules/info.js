const express = require('express')
const infoController = require('./infoController')

// const ic = new infoController()

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
  .post('/', infoController.setRedis)
