module.exports = {
	name: 'ping',
	description: 'Pong !',
	execute(message, args) {
		console.log(`Hey from ${__filename} !`);
		message.channel.send('pong !');
	}
}