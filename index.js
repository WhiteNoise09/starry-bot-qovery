// requires
const Discord 	   = require('discord.js');
const { Database } = require('oomysql');
const fs 	  	   = require('fs');
const colors  	   = require('colors');
const utils   	   = require('./utils');
const config  	   = require('./config.json');

console.log('hey');

// Connection à la BDD
const db = new Database({
    cacheTables: true,
    pingTime: 3600000
});

db.connect({
    host: process.env.QOVERY_DATABASE_STARRY_HOST,
    user: process.env.QOVERY_DATABASE_STARRY_USERNAME,
    password: process.env.QOVERY_DATABASE_STARRY_PASSWORD,
    database: process.env.QOVERY_DATABASE_STARRY_NAME,
});

db.on('ready', () => {
	console.log('OMG CONNECTED')
})

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
	: client.on(event.type, event.callback)

	SB.log(`registered '${event.type.yellow}' event : ${file.toString().gray}`);
});

// récupération des commandes
fs.readdirSync(config.commands_path).forEach(file => {
	const command = require(`${config.commands_path}/${file}`);

	client.commands.set(command.name, command);

	SB.log(`registered '${command.name.magenta} command : ${file.toString().gray}'`);
});

client.login(process.env.TOKEN); // login avec token, privé