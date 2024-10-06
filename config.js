const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '263715907468'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'miltonbrian45@gmail.com'
global.github = 'https://github.com/HyHamza/BYTE-MD-LITE'
global.location = 'Earth'
global.gurl = 'https://instagram.com/talkdrove' // add your username
global.sudo = process.env.SUDO || "263715907468"
global.devs = '263715907468';
global.website = 'HyHamza.vercel.app' //wa.me/+92000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/BYTE-MD-LITE.jpeg'
module.exports = {
  sessionName: process.env.SESSION_ID || " Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUl4QkFWQnI2QU9xSUpWTWNRUHREZWNFL0RHYlN0S0pyOWgwSW9kZ1NFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1F4MU9kbEhGdzNTbzBLaFJoSllFdDA0eXA2K1RUSW5zdFg1dGNoaXlEaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQ0UwNm9vcjdURzNyNEVWQTIrUzd4UGQ3Q29yQTdlRi9ZTkx4bmhOSTM0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnakdFZnF4NzEzYk5UeVdLR0VSbTdPWHpmdkI4eWVzN3c1alI2UEFhRGpzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFJNUg4bXRMQjU3eEgxb3l1MnVBSHd5M3lxalZGeTFuUENlWUROQjNyRzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVsNXVvWUE4Yk5MblV6Y0JkU0JvMi9WZFF2MUs4RFNpL3c4L2YxOWI2bG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlB1TG0zVU9mZ0h1ZS9xUkUvWE5OTEpITHREVjFsMnhYK2VSa0tTeHgwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZHdXc2srM2JNS3YxdnNBTnFpTXA0VkN0OGtJeG9idnJhc1Jxb210VnFUTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZaakZFTllPOHRpTENHL2ZaZVBuWWs2MStuQ0JzbVc5MTJGaGlxc2h5YzAzYmw2bUgvZE9RZEVoOXp5NGJqTkQ1SjcvZHhISHEwV3hwQUE4d1RSQkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgsImFkdlNlY3JldEtleSI6Im1HT0lyVTF5Mmd1dXJuMkVUL1ViWTJsY2kxTklUenJWYlJxUGh4U1NMVVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJRc3JjZldJUmstZFhKRVQyVTFpLXciLCJwaG9uZUlkIjoiYmFkMDk0OTYtNTg1Mi00MzU3LWJkOTItNTYwYWEyMjY0Njc0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkY2RUM2ZzdhWTUwVXAwQVFlQTBab3hVQk9TUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQTng1NkpaNVl1ek8yN1BhQUs3WmpaSzVyTmc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNUZUR0xER1giLCJtZSI6eyJpZCI6IjI1NjcwODg1MzQzMjoyMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwk4ap8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIPCdkIHwnZCA8J2Qi/CdkI7wnZCC8J2Qh/CThqoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09ySWlKVUdFTzZRaWJnR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imoxc0x2SXZmb3l0bXZzdFczcEFrcjFITTJXaFgxTWQ1Z0wycjErODY2bmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik1idmNDa25HNFI4UnpPS0FBYi9PekwxaGFSRmRrTlJDT1NhSVhSWXBZZytla2pFaG9mK05FZnZ2OXFaVnFuUzlDR0lPay8wYWJLK3NRTUpWZkNhTkFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJxMnd4SDNFb3VZYXI2WmpaNlYyMXpBKy80TWMzaGJBT0sxUi9CMmxjSFNvbkZXbW5ZL2gwTGhmOUlCZjFXWW9RNXVnVGRFNGpwaHRROXVhSEo5WDZDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NjcwODg1MzQzMjoyMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZOWJDN3lMMzZNclpyN0xWdDZRSks5UnpObG9WOVRIZVlDOXE5ZnZPdXAzIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4MjAyODc3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNjdiJ9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'BYTE-MD',
  packname:  process.env.PACK_NAME || 'Miltom Technologies',
  
  botname:   process.env.BOT_NAME === undefined ? "MILTON-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'TalkDrove' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'fuck' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'all' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*MILTON technologies* ",   
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? '0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'MILTON-MD-LITE',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
