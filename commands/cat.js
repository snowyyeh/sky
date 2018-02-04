const snek = require('snekfetch');

module.exports = {
    run: async (client, msg, args) => {
        const r = await snek.get('http://random.cat/meow');
        msg.channel.send('Here is a random cat picture...', { files: [r.body.file] });
    },
    meta: {
        name: 'cat',
        ownerOnly: false,
        description: 'Return a picture of a cute cat.',
        usage: ''
    }
}