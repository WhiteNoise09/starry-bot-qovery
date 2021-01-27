// requires
const Discord = require('discord.js');
const fs 	  = require('fs');
const config  = require('./config.json')

// variables
const client = new Discord.Client();

// récupération des events
fs.readdirSync(config.events_path).forEach(event => {
	const event = require(`${config.events_path}/${event}`);

	event.once
	? client.once(event.type, event.callback)
	: client.on(event.type, event.callback)
});

// récupération des commandes
/*
<à faire>
*/

client.login(process.env.TOKEN); // login avec token, privé