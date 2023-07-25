console.log("hello world");

require('dotenv').config();
const axios = require('axios');
const BOT_TOKEN = process.env.BOT_TOKEN;
const whitelistedChatIds = [process.env.CHAT_ID_1, process.env.CHAT_ID_2 , process.env.CHAT_ID_3 ];
const telegramBotName = process.env.BOT_NAME;
const messageContext = process.env.GPT_MESSAGECONTEXT;
const command1 = 'summarizetoday';
const commands = [command1];
const mention = `@${telegramBotName}`;
const mentions = [mention, ...commands.map(comm => `/${comm}${mention}`)];

const sendMessage = require("./sendMessage");
const {getUpdateId, setUpdateId} = require("./handleUpdateId");
const {askGptQuestion, createGptMessage} = require("./askGptQuestion");
const defaultMessage = createGptMessage('system', messageContext);
const handleMention = require("./handleMention");

async function getUpdates() {
    try {
        console.log(mentions);
        const latestUpdateId = getUpdateId();
        console.log("getting updates");
        const response = await axios.get(`https://api.telegram.org/bot${BOT_TOKEN}/getUpdates?offset=${latestUpdateId}`);
        const { result } = response.data;
        
        if (result.length > 0) {
            console.log(result);
            const sortedResults = result.sort((a, b) => a.update_id - b.update_id);
            const lastResultId = sortedResults[sortedResults.length-1].update_id;
            setUpdateId(lastResultId+1);

            const messages = sortedResults.map(sr => sr.message).filter(message => mentions.find(m => getMessageText(message).startsWith(m)));
            console.log(`Amount of messages: ${messages.length}`);
            for await (const message of messages) {
                let messageList = [defaultMessage];
                console.log(message);
                const chatId = message.chat.id;
                if (whitelistedChatIds.find(wId => wId == chatId)) {
                    console.log(`SUCCES. ChatId ${chatId} is whitelisted`);
                    if (getMessageText(message).startsWith(mention)) {
                        await handleMention(message, mention, messageList);
                    } else {
                        // handle posslbe commands
                        console.log("not yet developed");
                    }

                } else {
                    console.log(`chatId ${chatId} not whitelisted`);
                }
            };
        } else {
            console.log("no new messages");
        }
    } catch (err) {
        console.error("Something went wrong in index ", err)
    }
}

const getMessageText = (message) => {
     // it could be that text attribute is not available for some messages. 
    try {
        return message.text;
    } catch (err) {
        console.error("Something went wrong in index/getMessageText", err);
        return null;
    }
}

setInterval(getUpdates, 5000); 


