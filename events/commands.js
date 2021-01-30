module.exports = {
	type: 'message',
	callback(message) {
		const { prefix } = SB.config;
		if(!message.content.startsWith(prefix)) return;

		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const commandName = args.shift().toLowerCase();

		const command = SB.client.commands.get(commandName);

		try {
			command.execute(message, args);
			SB.log(`${message.author} executed ${commandName} command successfully !`);
		} catch(error) {
			SB.log(`${message.author} executed ${commandName} command but a ${error.name} error occured : \n ${error.message}`);
		}
	}
}