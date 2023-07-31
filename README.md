# digitalfriend
Add chat gpt as a friend to you telegram groupchat. You can tag/mention him in messages for questions. You can reply to his answers with other questions (tagging still nessecary). 

1. Install NodeJs on your Localmachine/RaspberryPi/Server

2. go to root directory and initialize the proejct with typing "npm install"

3. Create a file called ".env" and add the following environment variables:

BOT_TOKEN=[ create a bot on telegram get it's token and paste it here. Tip: use telegram bothFather ]

GPT_TOKEN=[ signup for chatGpt and get your chatGpt token paste it here ]

BOT_NAME= [ add the name of the bot you created on telegram here ] 

GPT_MESSAGECONTEXT=[ add a default prompt here which you want to give to chat-gpt on each request. for example: "You are added to a telegram groupchat of around 10 male millenials. They dont like to read multiple alineas so try to keep it short, but also explain why you chose the answer. Could you respond to the following question as if you are a bro in this group but also keep in mind that you are an AI and here to help them with questions they have:" ]

CHAT_ID_1=[ add a telegram groupchatId for testing. How to get telegramChatId: create groupchat, add getMyId bot to your chat. It will automatically message the ID of your chat. Afterwards remove the bot from your chat. ]

CHAT_ID_2=[ add another telegram groupchatId ]

CHAT_ID_3=[ add another telegram groupchatId ] 

4. create a groupchat on telegram with your bot as admin. Set the "privacy mode"of your telegram bot (is On by default) to "off" with /setprivacy in telegram using the bothFather.
   
5. to run locally run: node index.js

6. tag your bot in the twelegram chat and ask him something.
   
7. if it works add your friends to the chat.



