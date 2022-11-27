const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('nueva description')
        .addStringOption(options => options.setName('bruh').setDescription("test")),
        // .addStringOption({name:"frase",description:"prueba"}),
	async execute(interaction) {
        const bruh = interaction.options.getString('bruh');
		await interaction.reply(`yo digo que: ${bruh}`)
	},
};