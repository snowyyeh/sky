module.exports = {
    run: async (client, msg, args) => {
        const r = client.db;
        if (!args[0]) {
            var points = await r.table('globalPoints').get(msg.author.id).run();
            if (!points) {
                msg.channel.send(`\\❌ **${msg.author.tag}** does not have a profile. Start chatting to automatically generate one.`);
            }
            msg.channel.send(`\\➡ **${msg.author.tag}** has **${points.points}** points.\n\\ℹ You can use \`${client.config.prefix}help points\` for more info on points.`);
        } else {
            const user = msg.mentions.users.first() || client.users.get(args[0]);
            if (!user) return msg.channel.send('\\❌ Invalid user.');
            if (user.bot) return msg.channel.send('\\❌ Bots do not have Sky points.');
            var points = await r.table('globalPoints').get(user.id).run();
            if (!points) {
                msg.channel.send(`\\❌ **${user.tag}** does not have a profile. Get them to start chatting to automatically generate one.`);
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