module.exports = {
    run: async (client, msg, args) => {
        try {
            const fs = require('fs');
            const m = await msg.channel.send('<a:skyloading:397962260540293120> Gathering all commands...');
            await fs.readdir('./commands', (err, files) => {
                const commands = [];                
                if (err) return console.error(err);
                files.forEach(file => {
                    if (msg.author.id !== client.config.ownerID) {
                        if (!require(`../commands/${file}`).meta.ownerOnly) commands.push(client.config.prefix + file.split('.')[0]);
                    } else {
                        commands.push(client.config.prefix + file.split('.')[0]);
                    }
            });
                const cmdMsg = [
                    `\\❗ __Use **${client.config.prefix}help** for other bot help.__`,
                    `\\❗ __Use **${client.config.prefix}cmdinfo <command name>** for information about a command.__`,
                    ``,
                    `**Displaying ${commands.length} Sky commands** \\➡ ${commands.join(', ')}`
                ].join('\n');
                m.edit(cmdMsg);
            });
        } catch(err) {
            msg.channel.send('\\❗ An unexpected error has occurred. Don\'t worry! The error has been automatically reported to bot administrators. If you try again and still see this message, wait for a fix. Join the support server found in `;about` for more information.');            
            client.error(client, err.stack, `Command Run`, `**cmd:** ${msg.content} **user:** ${msg.author.tag} (${msg.author.id}) **guild:** ${msg.guild.name} (${msg.guild.id})`);
        }
    },
    meta: {
        name: 'commands',
        ownerOnly: false,
        description: 'Returns a list of all available Sky commands.',
        usage: ''
    }
}