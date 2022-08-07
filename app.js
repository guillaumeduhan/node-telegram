const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const telegram = require('./telegram.js')

// TELEGRAM_TOKEN=5425368755:AAF5r6rhUThXyN4VV1vx5EHC4JdLskZK-VA
// TELEGRAM_CHANNEL_ID = -761450976

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

require('dotenv').config()

app.all('/message', (req, res) => {
  const { message } = req.body
  telegram.sendMessage(message)
  res.send({
    status: 200,
    message: 'Message envoyé.'
  })
})

app.listen(PORT, async () => {
  console.log(`Node-telegram launched on PORT: ${PORT}`)
})