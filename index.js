const { Client } = require('discord.js');
const client = new Client({ disableEveryone: true});
const fs = require('fs');
client.config = require('./config.json');
client.login(client.config.token);
client.error = require('./util/errorLogger.js').run;
client.db = require('rethinkdbdash')( {db: 'sky' });
client.tempProfiles = {};


fs.readdir('./events', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const eventFunction = require(`./events/${file}`);
        const eventName = file.split('.')[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});

