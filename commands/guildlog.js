const fs = require('fs');

module.exports = {
    run: async (client, msg, args) => {
        fs.appendFile(`/home/jellz/personalcdn/data/${msg.id}-guilds.txt`, '--- BEGIN GUILD LOG ---');
        client.guilds.array().forEach(element => {
            fs.appendFile(`/home/jellz/personalcdn/data/${msg.id}-guilds.txt`, ` \nNAME: ${element.name} ID: ${element.id} OWNER: ${element.owner.user.tag} (${element.owner.user.id}) SIZE: ${element.memberCount} `);
        }, (err) => console.error(err));
        fs.appendFile(`/home/jellz/personalcdn/data/${msg.id}-guilds.txt`, '\n--- END GUILD LOG ---');
        msg.channel.send(`\\✅ Done! You can view the file @ <https://cdn.jellz.fun/${msg.id}-guilds.txt>`);   
    },
    meta: {
        name: 'guildlog',
        ownerOnly: true,
        description: 'Dump a log of all guilds the bot is currently in.',
        usage: ''
    }
}