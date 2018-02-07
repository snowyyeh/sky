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
            const target = msg.mentions.users.first() || client.users.get(args[0]);
            if (!target) return msg.channel.send('\\❌ Invalid users.');
            if (target.bot) return msg.channel.send('\\❌ Bots do not have Sky Points\\™.');
            var points = await r.table('globalPoints').get(target.id).run();
            if (!points) {
                msg.channel.send(`\\❌ **${target.tag}** does not have a profile. Get them to start chatting to automatically generate one.`);
            }
            msg.channel.send(`\\➡ **${target.tag}** has **${points.points}** points.\n\\ℹ You can use \`${client.config.prefix}help points\` for more info on points.`);
        }   
    },
    meta: {
        name: 'points',
        ownerOnly: false,
        description: 'Displays Sky Points\\™ profile of target.',
        usage: '[%mention%|%user ID%]'
    }
}