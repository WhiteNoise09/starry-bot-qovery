module.exports = {
	name: 'avatar',
	description: 'Affiche votre avatar ou celui d\'une autre personne.',
	execute(message, args) {
		const target = message.mentions.members.first();
		if(!target) message.channel.send(target.displayAvatarURL());
		else message.channel.send(message.author.displayAvatarURL());
	}
}