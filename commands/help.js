module.exports = {
    run: async (client, msg, args) => {
        msg.channel.send('hi nerd');
    },
    meta: {
        name: 'help',
        ownerOnly: false,
        description: 'I\'m stuck Where do I go? Oh! Thanks Sky, the extremely helpful bot.',
        usage: ''
    }
}