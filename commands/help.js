module.exports = {
    run: async (client, msg, args) => {
        const categories = ['points'];
        if (!args[0]) {
            const helpMain = [
                '**__Sky Main Help__**',
                '',
                `For a list of commands, use \`${client.config.prefix}commands\`.`,
                'For in-depth information about a specific command, such as usage & description',
                `please use \`${client.config.prefix}cmdinfo <command>\`.`,
                '',
                '**Some common help categories are...**',
                `${client.config.prefix}help points`,
                '',
                'For live support, please join the support guild:',
                'https://discord.gg/s9qed5A',
                '... and we\'ll be happy to help.'
            ].join('\n');
            msg.channel.send(helpMain);
        } else if (args[0]) {
            const pointsCmds = [`\`${client.config.prefix}lb\``, `\`${client.config.prefix}points\``, `\`${client.config.prefix}bet\``];
            const helpPoints = [
                '**__Sky Points Help__**',
                '',
                'One of Sky\'s many fun features is a chat-based Points system.',
                'Users earn points by chatting in any channel Sky can read.',
                'Sky\'s Points system does not include "levels" so you will not be seeing any **Level up!** messages.',
                'Points are often referred to as points or Sky Points™, so if you see someone talking about Sky Points™, you know what they mean.',
                '',
                `Sky Points™ can also be gambled using the \`${client.config.prefix}bet\` command.`,
                'Say you bet 50 points: you either win, or you lose. Winning would mean you gain 50 points. Losing would mean you lose the 50 points you bet.',
                `The current points commands consist of: ${pointsCmds.join(' ')}.`,
                '',
                `Currently the user with the most Sky Points™ is **${client.points.array().sort((a, b) => b.points - a.points)[0].tag}**`
            ].join('\n');
            msg.channel.send(helpPoints);
        }
        
    },
    meta: {
        name: 'help',
        ownerOnly: false,
        description: 'I\'m stuck Where do I go? Oh! Thanks Sky, the extremely helpful bot.',
        usage: ''
    }
}