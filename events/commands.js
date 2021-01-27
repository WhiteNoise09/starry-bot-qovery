module.exports = {
	type: 'message',
	once: true,
	callback(message) {
		const { prefix } = SB.config;
		if(!message.content.startsWith(prefix)) return;

		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const commandName = args.shift().toLowerCase();

		const command = SB.client.commands.get(commandName);

		command.execute(message, args);
	}
}