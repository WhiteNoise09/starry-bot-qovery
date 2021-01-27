module.exports = {
	name: 'ping',
	description: 'Affiche votre avatar ou celui d\'une autre personne.',
	execute(message, args) {
		message.channel.send('pong !');
	}
}