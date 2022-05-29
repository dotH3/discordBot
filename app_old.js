const Discord = require("discord.js");
const client = new Discord.Client();

require('dotenv').config()
const token = process.env.TOKEN;
const admin_id = process.env.ADMIN_ID;
const prefix = process.env.PREFIX;
const color = "0x66b3ff"


client.on('ready', () => {console.log(`Estoy listo! ${client.user.username+"#"+client.user.discriminator}`);});

client.on('message', (message) => {
    if (message.author.bot) return;

    const botAvatar = client.user.displayAvatarURL({ size: 1024, dynamic: true });
    //const avatar = message.author.displayAvatarURL({ size: 1024, dynamic: true });

    const messageArray = message.content.split(' ');
    const command = messageArray[0].slice(1);

    const member = message.mentions.users.first() || message.author;
    const avatar = member.displayAvatarURL({ size: 1024, dynamic: true });

    const server = message.guild;
    const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());


    if (command == "avatar") {
        const embed = new Discord.MessageEmbed()
            .setTitle('Avatar')
            //.setAuthor(message.author.username)
            .setImage(avatar)
            .setTimestamp()
            .setColor(color)
        message.channel.send(embed);
    }
    if (command == 'server') {
        const embed = new Discord.MessageEmbed()
            .setThumbnail(server.iconURL)
            .setAuthor(server.name, server.iconURL({ size: 1024, dynamic: true }))
            .addField('ID', server.id)
            .addField('Creado el', server.joinedAt.toDateString())
            .addField('Dueño del Servidor', server.owner.user.username + '#' + server.owner.user.discriminator + ' (' + server.owner.user.id + ')')
            .addField('Miembros', server.memberCount,)
            .addField('Roles', roles)
            .setColor(color)
            .setTimestamp()
        message.channel.send({ embed });
    }
    if(command == 'user'){
        // let test = {
        //     id: '805641887780175892',
        //     system: null,
        //     locale: null,
        //     flags: UserFlags { bitfield: 64 },
        //     username: '.pointH3()',
        //     bot: false,
        //     discriminator: '7681',
        //     avatar: 'e421988d7e544c44cec05d1d5bdf717e',
        //     lastMessageID: '980470587958894613',
        //     lastMessageChannelID: '976658894896128050'
        //   }
    }
});

client.login(token);
