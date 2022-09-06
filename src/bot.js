const { REST, Routes, Client, GatewayIntentBits, Collection } = require("discord.js");
const client = new Client({intents:[GatewayIntentBits.Guilds]});
const fs = require('fs');

require("dotenv").config();
const token = process.env.TOKEN;

client.commands = new Collection();
const functionsFolder = fs.readFileSync('./src/functions');
client.commandArray = [];

for(const folder of functionsFolder){
    const functionFiles = fs.readFileSync(`./src/functions/${folder}`).filter(file => file.endsWith('.js'))
    // for(const file of functionFiles) require(`./src/functions/${folder}/${file}`){client}
}

client.login(token);