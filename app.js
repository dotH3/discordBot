const { Client, GatewayIntentBits } = require('discord.js');
const { registerCommands } = require('./helpers/server');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const token = process.env.TOKEN

registerCommands();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    // console.log(interaction.user);
    if(interaction.user.bot)return await interaction.reply("Eres un bot!")

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong~!');
    }
    if (interaction.commandName === 'avatar') {
        await interaction.reply(interaction.user.avatarURL({size:4096}));
    }
});

client.login(token);