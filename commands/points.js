module.exports = {
    run: async (client, msg, args) => {
        const r = client.db;
        if (!args[0]) {
            var points = await r.table('globalPoints').get(msg.author.id).run();
            if (!points) {
                const m = await msg.channel.send(`<a:skyloading:397962260540293120> Generating profile for **${msg.author.tag}**...`);
                require('../util/points.js').run(client, msg.author);
                points = await r.table('globalPoints').get(msg.author.id).run();
                m.edit(`\\➡ **${msg.author.tag}** has **${points.points}** points.\n\\ℹ You can use \`${client.config.prefix}help points\` for more info on points.`);
                return;
            }
            msg.channel.send(`\\➡ **${msg.author.tag}** has **${points.points}** points.\n\\ℹ You can use \`${client.config.prefix}help points\` for more info on points.`);
        } else {
            const user = msg.mentions.users.first() || client.users.get(args[0]);
            if (!user) return msg.channel.send('\\❌ Invalid user.');
            if (user.bot) return msg.channel.send('\\❌ Bots do not have Sky points.');
            var points = await r.table('globalPoints').get(user.id).run();
            if (!points) {
                const m = await msg.channel.send(`<a:skyloading:397962260540293120> Generating profile for **${user.tag}**...`);
                require('../util/points.js').run(client, user);
                points = await r.table('globalPoints').get(user.id).run();
                return m.edit(`\\➡ **${user.tag}** has **${points.points}** points.\n\\ℹ You can use \`${client.config.prefix}help points\` for more info on points.`);
            }
            msg.channel.send(`\\➡ **${user.tag}** has **${points.points}** points.\n\\ℹ You can use \`${client.config.prefix}help points\` for more info on points.`);
        }   
    },
    meta: {
        name: 'points',
        ownerOnly: false,
        description: 'View your or another user\'s Sky Points™.',
        usage: '[%mention%|%user ID%]'
    }
}