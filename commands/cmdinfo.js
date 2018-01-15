module.exports = {
    run: async (client, msg, args) => {
        try {
            if (!args[0]) return msg.channel.send('\\❌ Please provide a command name to view.');
            const meta = require(`../commands/${args[0].toLowerCase()}`).meta;
            const m = await msg.channel.send('<a:skyloading:397962260540293120> Fetching command data...');
            const infoMsg = [
                `\\❓ **__Command Info:__** ${meta.name} \\❓`,
                ``,
                `**Owner Only?** ${meta.ownerOnly}`,
                `**Description:** ${meta.description}`,
                `**Usage:** ${client.config.prefix}${meta.name} ${meta.usage}`
            ].join('\n');
            m.edit(infoMsg);
        } catch(err) {
            if (err.toString().toLowerCase().includes('cannot find module')) return msg.channel.send('\\❌ Invalid command name.');
            msg.channel.send('\\❗ An unexpected error has occurred. Don\'t worry! The error has been automatically reported to bot administrators. If you try again and still see this message, wait for a fix. Join the support server found in `;about` for more information.');
            client.error(client, err.stack, `Command Run`, `**cmd:** ${msg.content} **user:** ${msg.author.tag} (${msg.author.id}) **guild:** ${msg.guild.name} (${msg.guild.id})`);
        }
    },
    meta: {
        name: 'cmd',
        ownerOnly: false,
        description: 'Returns information about the specified command.',
        usage: '<%command name%>'
    }
}