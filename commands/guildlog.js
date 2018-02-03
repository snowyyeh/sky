const fs = require('fs');

module.exports = {
    run: async (client, msg, args) => {
        const m = await msg.channel.send('<a:skyloading:397962260540293120> Dumping all guilds to file...');
        fs.appendFile(`/home/jellz/${msg.id.slice(0, 4)}-guilds.txt`, '--- BEGIN GUILD LOG ---');
        await client.guilds.array().forEach(element => {
            fs.appendFile(`/home/jellz/${msg.id.slice(0, 4)}-guilds.txt`, `NAME: ${element.name} ID: ${element.id} OWNER: ${element.owner.user.tag} (${element.owner.user.id}) SIZE: ${element.memberCount}`);
        });
        fs.appendFile(`/home/jellz/${msg.id.slice(0, 4)}-guilds.txt`, '--- END GUILD LOG ---');
        m.edit(`✅ Done! You can view the file @ <https://cdn.jellz.fun/${msg.id.slice(0, 4)}-guilds.txt>`);   
    },
    meta: {
        name: 'guildlog',
        ownerOnly: true,
        description: 'Dump a log of all guilds the bot is currently in.',
        usage: ''
    }
}