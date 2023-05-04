const { Client, Intents } = require('discord.js');
const config = require("./config.json");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS,
Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_PRESENCES]});
const prefix = config.prefix;

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command == "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }

  else if (command == "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }
});
client.on("ready",()=>{ 
    console.log('Bot Online')
  });

client.on('raw', async dados =>{
    if(dados.t != "MESSAGE_REACTION_ADD" && dados.t != "MESSAGE_REACTION_REMOVE")return
    if(dados.d.message_id != "888178790352699402")return

    let servidor = client.guilds.cache.get("756293534826365009")
    let membro = servidor.members.cache.get(dados.d.user_id)
    let arqueiro = servidor.roles.cache.get("888141022993981460")
    let mago = servidor.roles.cache.get("888141031122538577")
    
});

client.login(config.token);
