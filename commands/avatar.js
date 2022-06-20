const { MessageEmbed } = require("discord.js");

require("dotenv").config();
const color = process.env.COLOR;

module.exports.run=(client, message, args)=>{
    const mention = message.mentions.users.first() || message.author;
    
    const embed = new MessageEmbed()
      .setTitle("Avatar")
    //.setAuthor(message.author.username)
      .setImage(mention.displayAvatarURL({ size: 1024, dynamic: true }))
      .setTimestamp()
      .setColor(color);
    message.channel.send({ embeds: [embed] });
}