const { Client } = require('discord.js');
const client = new Client({ disableEveryone: true});
const fs = require('fs');
client.config = require('./config.json');
client.login(client.config.token);
client.error = require('./util/errorLogger.js').run;
client.db = require('rethinkdbdash')( {db: 'sky' });
client.tempProfiles = {};

const Cleverbot = require('cleverbot');
 
exports.clev = new Cleverbot({
    key: client.config.cleverbotKey
});

require('./website/website.js').app.listen(process.env.PORT || 3003, function() {
    console.log(`Listening on port ${process.env.PORT || 3003}.`);
});

fs.readdir('./events', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const eventFunction = require(`./events/${file}`);
        const eventName = file.split('.')[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});

