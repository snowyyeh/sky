// https://discordapp.com/api/oauth2/authorize?client_id=397691694461747210&permissions=238414913&scope=bot

module.exports = {
    run: async (client, msg, args) => {
        try {
            msg.channel.send('Sky does not require many permisisons. In fact, the only moderator permissions it needs are Manage Nicknames and Manage Messages. To add Sky to your server, use this link; <https://discordapp.com/oauth2/authorize?client_id=397691694461747210&permissions=238414913&scope=bot>. Remember you need to have the Manage Server permission to add the bot.')
        } catch(err) {
            msg.channel.send('\\❗ An unexpected error has occurred. Don\'t worry! The error has been automatically reported to bot administrators. If you try again and still see this message, wait for a fix. Join the support server found in `;about` for more information.');            
            client.error(client, err.stack, `Command Run`, `**cmd:** ${msg.content} **user:** ${msg.author.tag} (${msg.author.id}) **guild:** ${msg.guild.name} (${msg.guild.id})`);
        }    
    },
    meta: {
        name: 'invite',
        ownerOnly: false,
        description: 'Returns an invite link for Sky.',
        usage: ''
    }
}