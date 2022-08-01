const { REST, Routes, Client, GatewayIntentBits, Collection } = require("discord.js");
const client = Client({intents:[GatewayIntentBits.Guilds]})
require("dotenv").config();
const token = process.env.TOKEN;

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

client.commands = new Collection();

client.login(token);