module.exports = {
    run: async (client, msg, args) => {
        try {
            const m = await msg.channel.send('\\🏓 Ping?');
            m.edit(`\\🏓 Pong! (Roundtrip: ${m.createdTimestamp - msg.createdTimestamp}ms | One-way: ${~~client.ping}ms)`);
        } catch(err) {
            msg.channel.send('\\❗ An unexpected error has occurred. Don\'t worry! The error has been automatically reported to bot administrators. If you try again and still see this message, wait for a fix. Join the support server found in `;about` for more information.');            
            client.error(client, err.stack, `Command Run`, `**cmd:** ${msg.content} **user:** ${msg.author.tag} (${msg.author.id}) **guild:** ${msg.guild.name} (${msg.guild.id})`);
        }    
    },
    meta: {
        name: 'ping',
        ownerOnly: false,
        description: 'Ping, pong!',
        usage: ''
    }
}