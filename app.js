const { Client, Intents, MessageEmbed, Collection} = require("discord.js");
const client = new Client({intents: ['GUILDS', 'GUILD_MESSAGES']});
const fs = require('fs');
const prefix = '!';

client.commands = new Collection();
const commands = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(file of commands){
  const commandName = file.split('.')[0];
  const command = require(`./commands/${commandName}`);
  client.commands.set(commandName, command)
}




require("dotenv").config();
const token = process.env.TOKEN;
// const color = process.env.COLOR;
// const admin_id = process.env.ADMIN_ID;
// const prefix = process.env.PREFIX;
// 

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  // const server = message.guild;
  // const serveroles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map((role) => role.toString());

  if(message.content.startsWith(prefix)){
    const args = message.content.slice(prefix.length).trim().split(/ + /g);
    const commandName = args.shift();
    const command = client.commands.get(commandName);
    if(!command)return
    command.run(client, message, args);
  };

  // if (command == "server") {
  //   const embed = new MessageEmbed()
  //     .setThumbnail(server.iconURL)
  //     .setAuthor({
  //       name: server.name,
  //       iconURL: server.iconURL(),
  //     })
  //     .addField("ID", server.id)
  //     .addField("Creado el", server.createdAt.toLocaleDateString())
  //     .addField("Miembros", server.memberCount.toString())
  //     .addField("Roles", serveroles.toString())
  //     .setColor(color)
  //     .setTimestamp();
  //   message.channel.send({ embeds: [embed] });
  // }
});

client.login(token);
