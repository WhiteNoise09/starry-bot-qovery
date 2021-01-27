// requires
const Discord 	   = require('discord.js');
const fs 	  	   = require('fs');
const colors  	   = require('colors');
const utils   	   = require('./utils');
const config  	   = require('./config.json');

// client discord
const client = new Discord.Client();
client.commands = new Discord.Collection();

// namespace global
global.SB = {
	client: client,
	config: config,
	...utils
}

// récupération des events
fs.readdirSync(config.events_path).forEach(file => {
	const event = require(`${config.events_path}/${file}`);

	event.once
	? client.once(event.type, event.callback)
	: client.on(event.type, event.callback);

	SB.log(`registered '${event.type.yellow}' event : ${file.toString().gray}`);
});

// récupération des commandes
fs.readdirSync(config.commands_path).forEach(file => {
	const command = require(`${config.commands_path}/${file}`);

	client.commands.set(command.name, command);

	SB.log(`registered '${command.name.magenta} command : ${file.toString().gray}'`);
});

client.login(process.env.TOKEN); // login avec token, privé