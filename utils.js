module.exports = {
	log(message) {
		const date = new Date(Date.now());
		console.log(`${date.toLocaleDateString('fr - FR').green} - ${date.toLocaleTimeString('fr - FR').cyan} : ${message}`);
	}
}