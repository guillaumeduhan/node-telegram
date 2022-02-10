process.env.NTBA_FIX_319 = 1;

require('dotenv').config()

const TelegramBot = require('node-telegram-bot-api');
const channelID = process.env.TELEGRAM_CHANNEL_ID
let bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

bot.on('message', (msg) => {
  // private message to your bot
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Received your message');
});

const telegram = {
  sendMessage: (str) => {
    if (bot && str) {
      // on trigger, send message to channelID (or groupID)
      bot.sendMessage(channelID, str);
    }
  }
}

module.exports = telegram;