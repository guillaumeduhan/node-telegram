const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const telegram = require('./telegram.js')

require('dotenv').config()

app.post('/message', (req, res) => {
  telegram.sendMessage('Message received from API post URL.')
  res.send({
    status: 200,
    message: 'Message envoyé.'
  })
})

app.listen(PORT, async () => {
  console.log(`Node-telegram launched on PORT: ${PORT}`)
})