const fs = require('fs');

module.exports = {
    run: async (client, msg, args) => {
        const m = await msg.channel.send('<a:skyloading:397962260540293120> Dumping all guilds to file...');
        fs.appendFile(`/home/jellz/personalcdn/data/${msg.id}-guilds.txt`, '--- BEGIN GUILD LOG ---');
        await client.guilds.array().forEach(element => {
            fs.appendFile(`/home/jellz/personalcdn/data/${msg.id}-guilds.txt`, ` NAME: ${element.name} ID: ${element.id} OWNER: ${element.owner.user.tag} (${element.owner.user.id}) SIZE: ${element.memberCount} `);
        }, (err) => console.error(err));
        fs.appendFile(`/home/jellz/personalcdn/data/${msg.id}-guilds.txt`, '--- END GUILD LOG ---');
        m.edit(`✅ Done! You can view the file @ <https://cdn.jellz.fun/${msg.id}-guilds.txt>`);   
    },
    meta: {
        name: 'guildlog',
        ownerOnly: true,
        description: 'Dump a log of all guilds the bot is currently in.',
        usage: ''
    }
}