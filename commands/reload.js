module.exports = {
    run: async (client, msg, args) => {
        try {
            if (!args[0]) return msg.channel.send('\\❌ Please provide a command name to reload.');
            delete require.cache[require.resolve(`./${args[0]}.js`)];
            msg.channel.send(`\\✅ Reloaded command \`${args[0]}\`.`);
        } catch(err) {
            if (err.toString().toLowerCase().includes('cannot find module')) return msg.channel.send('\\❌ Invalid command name.');            
            msg.channel.send('\\❗ An unexpected error has occurred. Don\'t worry! The error has been automatically reported to bot administrators. If you try again and still see this message, wait for a fix. Join the support server found in `;about` for more information.');            
            client.error(client, err.stack, `Command Run`, `**cmd:** ${msg.content} **user:** ${msg.author.tag} (${msg.author.id}) **guild:** ${msg.guild.name} (${msg.guild.id})`);
        }
    },
    meta: {
        name: 'reload',
        ownerOnly: true,
        description: 'Reloads the specified command.',
        usage: '<%command name%>'
    }
}