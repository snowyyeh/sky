module.exports = {
    run: async (client, msg, args) => {
        if (!args[0]) return msg.channel.send('\\❌ Please provide a valid input.');
        const query = args.join(' ');
        msg.channel.send(`query: ${query}`);
        const cleverbot = require('../index.js').cleverbot;
        await cleverbot.write(query, function(response) {
            msg.channel.send(response.output);
            msg.channel.send(JSON.stringify(response), { code: 'json' });
        });
    },
    meta: {
        name: 'cb',
        ownerOnly: false,
        description: 'Talk with the Sky cleverbot.',
        usage: '<%input%>'
    }
}