module.exports = {
    run: async (client, guild) => {
        const channel = client.channels.get(client.config.guildLogChannel);
        await client.db.table('guildConfig').get(guild.id).delete().run();
        const log = [
            '<:skydecrement:409275185930305537> **__Left guild!__**',
            `**__Name:__** ${guild.name} (${guild.id})`,
            `**__Owner:__** ${guild.owner.user.tag} (${guild.owner.user.id})`,
            `**__Size:__** ${guild.memberCount}`
        ].join('\n');
        channel.send(log);
    }
}