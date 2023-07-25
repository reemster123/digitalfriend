const sendMessage = require("./sendMessage");
const {askGptQuestion, createGptMessage} = require("./askGptQuestion");

const handleMention = async (message, mention, messageList) => {
    try {
        const replyMessage = message.reply_to_message;
        if (replyMessage) {
            const replyText = getMessageText(replyMessage);
            console.log("ReplyMessage:", replyText);
            const replyGptMessage = createGptMessage('assistant', replyText);
            messageList.push(replyGptMessage);
        }
        const question = getQuestion(message, mention);
        const newGtpMessage = createGptMessage('user', question);
        messageList.push(newGtpMessage);
        const answer = await askGptQuestion(messageList);
        console.log('Received message:', question);
        await sendMessage(message.chat.id, answer); 
    } catch (err) {
        console.log('Something went wrong in handleMention', err);
    }
        
}

const getQuestion = (message, mention) => {
    return message.text.split(mention)[1].trim();
}

module.exports = handleMention;