require('dotenv').config();
const axios = require('axios');
const BOT_TOKEN = process.env.BOT_TOKEN;
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;


module.exports = async (chatId, text) => { 
    try {
        await axios.post(`${TELEGRAM_API}/sendMessage`, {
            chat_id: chatId,
            text: text
        });
    } catch (err) {
        console.log("Something went wrong in sendMessage", err);

    }
}