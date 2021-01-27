module.exports = {
	log(message) {
		const date = new Date(Date.now());
		console.log(`${date.toLocaleDateString().green} - ${date.toLocaleTimeString().cyan} : ${message}`);
	}
}