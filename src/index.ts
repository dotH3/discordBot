import { Client, GatewayIntentBits, Events } from 'discord.js'
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config();

interface DeletedMessages {
    data: {
        content:string
    }[]
}

const token = process.env['TOKEN']

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions

    ]
})

client.on('messageReactionAdd', reaction => {
    console.log(reaction);
})

client.on('messageDelete', async (message) => {
    // const file:DeletedMessages = JSON.parse( fs.readFileSync('deleted_messages.json','utf-8') )
    // file.data.map((deletedMessage,index)=>{
    //     console.log(index,deletedMessage.content);
    // })
    
    console.log(message.author?.username,message.content);
    
    message.channel.send({content:`> User "${message.author?.tag}" delete the message "${message.content}"`})
    
    // const data = JSON.parse(file)
    // console.log();
    
})

client.on('ready', () => {
    console.log(`Running as ${client.user?.tag}!`);
})

client.login(token)