module.exports = {
    run: async (client, msg, args) => {
        if (!args[0]) {
            const db = client.points;
            var points = db.get(msg.author.id);
            if (!points) {
                const m = await msg.channel.send(`<a:skyloading:397962260540293120> Generating profile for **${msg.author.tag}**...`);
                require('../util/resetPoints.js').run(client, msg.author);
                points = db.get(msg.author.id);
                return m.edit(`\\➡ **${msg.author.tag}** has **${points.points}** points.\n\\ℹ You can use \`${client.config.prefix}help points\` for more info on points.`);
            }
            msg.channel.send(`\\➡ **${msg.author.tag}** has **${points.points}** points.\n\\ℹ You can use \`${client.config.prefix}help points\` for more info on points.`);
        } else {
            const user = msg.mentions.users.first() || client.users.get(args[0]);
            if (!user) return msg.channel.send('\\❌ Please provide a user ID or user mention.');
            if (user.bot) return msg.channel.send('\\❌ Bots do not have Sky points.');
            const db = client.points;
            var points = db.get(user.id);
            if (!points) {
                const m = await msg.channel.send(`<a:skyloading:397962260540293120> Generating profile for **${user.tag}**...`);
                require('../util/resetPoints.js').run(client, user);
                points = db.get(user.id);
                return m.edit(`\\➡ **${user.tag}** has **${points.points}** points.\n\\ℹ You can use \`${client.config.prefix}help points\` for more info on points.`);
            }
            msg.channel.send(`\\➡ **${user.tag}** has **${points.points}** points.\n\\ℹ You can use \`${client.config.prefix}help points\` for more info on points.`);

        }   
    },
    meta: {
        name: 'points',
        ownerOnly: false,
        description: 'View your Sky points.',
        usage: '[%mention%|%user ID%]'
    }
}