
require('dotenv').config();

const axios = require('axios');
const apiKey = process.env.GPT_TOKEN;

async function askGptQuestion(messageList) {
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo', // Specify the model you want to use
      messages: messageList,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`, // Replace with your OpenAI API key
      },
    });

    const answer = response.data.choices[0].message.content;
    return answer;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

const createGptMessage = (role, content) => {
  return {
    role: role,
    content: content, 
  }
} 


module.exports = {askGptQuestion, createGptMessage};