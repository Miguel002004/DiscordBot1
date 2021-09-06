const { Client, Intents, MessageEmbed} = require('discord.js');
const fs = require('fs');
//==========================================
let rawdata = fs.readFileSync('config.json');
let config = JSON.parse(rawdata);
//==========================================

const TOKEN = config.token
console.log(TOKEN);

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready',()=>{
  console.log('listo desde usuario '+client.user.tag);
});
client.on('message',(message)=>{
  console.log(message.author.username+': '+message.content);
  message.content == 'miguel' ? message.reply('la mera verga') : null;
  message.content == 'pp' ? message.reply('navas fierro') : null;
  message.content == 'mimi' ? message.reply('Te me vas a pluton >:D'): null;
});

client.login(TOKEN);
