const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready',()=>{
  console.log('listo desde usuario '+client.user.tag);
});
client.on('message',(message)=>{
  console.log(message.author.username+': '+message.content);
  message.content == 'miguel' ? message.reply('la mera verga') : null;
});

client.login('ODgyNzA3MTcyMDU4ODY5Nzgx.YS_THQ.QOC2OBhGBeN2wdCQ3e9FgEuyxrw');
