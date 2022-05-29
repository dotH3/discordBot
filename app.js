const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],});

require('dotenv').config()
const token = process.env.TOKEN;
const admin_id = process.env.ADMIN_ID;
const prefix = process.env.PREFIX;
const color = "0x66b3ff"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate' , (message)=>{
    if(message.author.bot)return
    const messageArray = message.content.split(' ');
    const command = messageArray[0].slice(1);
    const mention = message.mentions.users.first() || message.author;
    const avatar = mention.displayAvatarURL({ size: 1024, dynamic: true });
    const server = message.guild;
    const serveroles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());


    if(command=="ping"){
        message.channel.send({content:"pong! 🏓 "+mention})
    }
    if (command == "avatar") {
        const embed = new MessageEmbed()
            .setTitle('Avatar')
            //.setAuthor(message.author.username)
            .setImage(avatar)
            .setTimestamp()
            .setColor(color)
        message.channel.send({embeds:[embed]});
    }
    if (command == 'server') {
        const embed = new MessageEmbed()
            .setThumbnail(server.iconURL)
            .setAuthor({
                name:server.name,
                iconURL:server.iconURL()
            })
            .addField('ID', server.id)
            .addField('Creado el', server.createdAt.toLocaleDateString())
            .addField('Miembros', server.memberCount.toString())
            .addField('Roles', serveroles.toString())
            .addField('Members', server.members.guild.map(role => role.toString()).toString())
            .setColor(color)
            .setTimestamp()
        message.channel.send({embeds:[embed]});
    }
})

client.login(token);