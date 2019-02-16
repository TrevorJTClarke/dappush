const express = require('express')

module.exports = express
  .Router()
  .get('/', (req, res) => {
    // generic node info, checking node current state/IDs
    res.json({
      id: '0x242n4...',
      channelId: 'fjkdsljfkdlsj',
      index: 0
    })
  })
