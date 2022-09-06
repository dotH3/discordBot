const fs = require('fs')
module.exports = (client) => {
    client.handlerCommands = async()=>{
        const commandFolders = fs.readFileSync('./src/commands');
        for(const foler of commandFolders){
            const commandFiles = fs.readFileSync(`./src/commands/${folder}`).filter(file => file.endsWith('.js'))
            const {commands, commandArray} = client
            for(const file of commandFiles){
                const command = require(`../.../commands/${folder}/${file}`);
                commands.set(command.data.name, command);
                commandArray.push(command.data.toJSON())
                console.log(`Commands: ${command.data.name} has passed`)
            }
        }
    }
}