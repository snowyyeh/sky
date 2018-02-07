module.exports = {
    run: async (client, msg) => {
        if (msg.author.bot) return;
        if (!msg.guild) return;
        if (msg.content.startsWith(client.config.prefix)) {
            const args = msg.content.slice(client.config.prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
            try {
                const commandFile = require(`../commands/${command}.js`);
                if (!require('../util/cmdMetaCheck.js').run(client, msg, commandFile)) return;
                commandFile.run(client, msg, args);
            } catch (err) {
                if (err.toString().toLowerCase().includes('cannot find module')) return;       
                client.error(client, err.stack, `(Message Handler) Command Run`, `**cmd:** ${msg.content} **user:** ${msg.author.tag} (${msg.author.id}) **guild:** ${msg.guild.name} (${msg.guild.id})`);
            }
        } else {
            const guildDbInfo = client.db.table('guildConfig').get(msg.guild.id).run();
            if (guildDbInfo.premium || guildDbInfo.official) {
                if (guildDbInfo.official) return require('../util/points.js').run(client, user, 2 * 3);
                if (guildDbInfo.premium) return require('../util/points.js').run(client, user, 2 * 2);
            } else {
                require('../util/points.js').run(client, user);
            }
        }
    }
}