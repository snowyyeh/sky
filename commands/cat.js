const snek = require('snekfetch');

module.exports = {
    run: async (client, msg, args) => {
        let m = await msg.channel.send('<a:skyloading:397962260540293120> Fetching a random cat... Just one sec! 🐱');
        const r = await snek.get('http://random.cat/meow');
        m.edit('🐱 Here you go...', { files: [r.body.file] });
    },
    meta: {
        name: 'cat',
        ownerOnly: false,
        description: 'Return a picture of a cat. Cuteness not guaranteed.',
        usage: ''
    }
}
