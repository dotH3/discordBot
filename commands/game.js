const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('game')
		.setDescription('te muestro un juego diario!'),
	async execute(interaction) {
		await interaction.reply('game');
	},
};