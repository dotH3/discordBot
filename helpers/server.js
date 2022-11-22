const { REST, Routes } = require("discord.js");
const fs = require('fs')

require('dotenv').config()
const token = process.env.TOKEN
const clientId = process.env.CLIENT_ID

const registerCommands = async() => {
    const data = fs.readFileSync('./commands/commands.json')
    const commands = JSON.parse(data)
    

    const rest = new REST({ version: '10' }).setToken(token);

    (async () => {
        console.clear();
        try {
            console.log('Started refreshing application (/) commands.');
            
            await rest.put(Routes.applicationCommands(clientId), { body: commands });
            
            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error(error);
        }
    })();
}

module.exports = {
    registerCommands
}