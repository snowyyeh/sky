module.exports = {
    run: async (client, msg, args) => {
        const info = [
            '__About **Sky**__',
            `Sky is in **${client.guilds.size}** guilds.`,
            `Sky is monitoring **${client.channels.size}** channels.`,
            `Sky is playing with **${client.users.size}** other users.`
            `Sky is running Node.js version **${process.version}**.`,
            `Sky is running Discord.js version **${require('discord.js').version}.**`,
            `Sky is looking for new users! Use \`;help\` to find out how you can use Sky.`
        ].join('\n');
        msg.channel.send(info);
    },
    meta: {
        name: 'about',
        ownerOnly: false,
        description: 'Displays information about Sky.',
        usage: ''
    }
}