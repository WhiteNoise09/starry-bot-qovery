module.exports = {
	type: 'ready',
	once: true,
	callback() {
		console.log(`Connected as ${SB.client.user.tag} !`);
	}
}