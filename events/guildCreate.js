
module.exports = {
    run: async (client, guild) => {
        const channel = client.channels.get(client.config.guildLogChannel);
        const log = [
            '<:skyincrement:409275185997283329> **__Joined guild!__**',
            `**__Name:__** ${guild.name} (${guild.id})`,
            `**__Owner:__** ${guild.owner.user.tag} (${guild.owner.user.id})`,
            `**__Size:__** ${guild.memberCount}`
        ].join('\n');
        channel.send(log);
    }
}