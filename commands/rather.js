module.exports = {
    run: async (client, msg, args) => {
        const snek = require('snekfetch');
        const r = await snek.get('https://jellz.me/api/rather');
        const choices = JSON.parse(r.text);
        msg.channel.send(`**${choices.question}**\nA) ${choices.choicea}                           B) ${choices.choiceb}`);
    },
    meta: {
        name: 'rather',
        ownerOnly: false,
        description: 'Returns a random Would You Rather question from https://jellz.me/api/rather.',
        usage: ''
    }
}