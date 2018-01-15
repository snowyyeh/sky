module.exports = {
    run: async (client, msg, args) => {
        try {
            const snek = require('snekfetch');
            const r = await snek.get('https://jellz.me/api/rather');
            const choices = JSON.parse(r.text);
            msg.channel.send(`**${choices.question}**\nA) ${choices.choicea}                           B) ${choices.choiceb}`);
        } catch(err) {
            msg.channel.send('\\❗ An unexpected error has occurred. Don\'t worry! The error has been automatically reported to bot administrators. If you try again and still see this message, wait for a fix. Join the support server found in `;about` for more information.');            
            client.error(client, err.stack, `Command Run`, `**cmd:** ${msg.content} **user:** ${msg.author.tag} (${msg.author.id}) **guild:** ${msg.guild.name} (${msg.guild.id})`);
        }
    },
    meta: {
        name: 'rather',
        ownerOnly: false,
        description: 'Returns a random Would You Rather question from https://jellz.me/api/rather.',
        usage: ''
    }
}