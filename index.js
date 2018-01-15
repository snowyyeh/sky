const { Client } = require('discord.js');
const client = new Client({ disableEveryone: true});
const fs = require('fs');
const Enmap = require('enmap');
const EnmapLevel = require('enmap-level');
client.config = require('./config.json');
client.login(client.config.token);
client.error = require('./util/errorLogger.js').run;
client.points = new Enmap({ provider: new EnmapLevel({ name: 'points' }) });



fs.readdir('./events', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const eventFunction = require(`./events/${file}`);
        const eventName = file.split('.')[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});

