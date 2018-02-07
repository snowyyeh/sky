module.exports = {
    run: async (client, msg, args) => {
        const target = args[0] ? client.guilds.get(args[0]) : msg.guild;
        if (!target) return msg.channel.send('\\❌ Invalid server.');
        const guildDbInfo = await client.db.get(target.id).run();
        const extraInfo = {
            humans: target.memberCount - target.members.filter(member => member.user.bot),
            bots: target.members.filter(member => member.user.bot),
            boldName: `**${target.name}**`
        };
        const info = [
            `__About **${target.name}**__`,
            '',
            `${extraInfo.boldName} has **${extraInfo.humans}** humans & **${extraInfo.bots}** bots.`,
            `${extraInfo.boldName} ${guildDbInfo.premium ? '**has** Sky Premium.' : '**does not** have Sky Premium.'}`,
            `${extraInfo.boldName} ${guildDbInfo.official ? '**is an official Sky guild.**' : 'is **not an official Sky guild.**'}`,
            `${extraInfo.boldName}'s verification level is set to **${target.verificationLevel}**.`,
            `${extraInfo.boldName} has **${target.channels.size}** channels.`,
            `${extraInfo.boldName} has **${target.roles.size}** roles.`,
            `${extraInfo.boldName} is owned by **${target.owner.user.tag}**.`,
            `${extraInfo.boldName} is located in **${target.region.toUpperCase()}**.`,
            `${extraInfo.boldName} has **${target.emojis.size}** custom emojis.`,
            `${extraInfo.boldName}'s icon can be found @ **${target.iconURL}**.`
        ].join('\n');
        msg.channel.send(info);
    },
    meta: {
        name: 'server',
        ownerOnly: false,
        description: 'Displays information about the target server.',
        usage: '[%server ID%]'
    }
}