module.exports = {
    run: async (client, msg, args) => {
        if (!args[0]) return msg.channel.send('\\❌ Please provide a valid input.');
        const query = args.join(' ');
        const cleverbot = require('../index.js').cleverbot;
        const response = await cleverbot.write(query);
        msg.channel.send(response.output);
    },
    meta: {
        name: 'cb',
        ownerOnly: false,
        description: 'Talk with the Sky cleverbot.',
        usage: '<%input%>'
    }
}