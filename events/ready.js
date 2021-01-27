module.exports = {
	type: 'ready',
	once: true,
	callback() {
		SB.log(`Connected as ${SB.client.user.tag} !`);
	}
}