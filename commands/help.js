module.exports = {
    run: async (client, msg, args) => {
        const categories = ['points'];
        if (!args[0]) {
            const helpMain = [
                '__Help for **Sky** __',
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
        } else if (args[0].toLowerCase() === 'points' || args[0].toLowerCase() === 'pts') {
            const pointsCmds = [`\`${client.config.prefix}lb\``, `\`${client.config.prefix}points\``, `\`${client.config.prefix}bet\``];
            const helpPoints = [
                '__Help for **Points**__',
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
                `Currently the user with the most Sky Points™ is **${client.points.array().sort((a, b) => b.points - a.points)[0].tag}**, see if you can overtake them!`
            ].join('\n');
            msg.channel.send(helpPoints);
        } else if (args[0].toLowerCase() === 'cleverbot' || args[0].toLowerCase() === 'ai') {
            const helpCleverbot = [
                '__Help for **Cleverbot**__',
                'Sky has a built-in Cleverbot AI.',
                '',
                'Access to Cleverbot API does infact cost $$ but it is worth it.',
                'If you have any money to spare and would like to support the',
                `Cleverbot AI in Sky, please use \`${client.config.prefix}about\` command.`,
                'Donations are greatly appreciated.',
                '',
                'To use the Cleverbot AI, just mention Sky with a query.',
                'For example -> **@Sky how was your day?**',
            ].join('\n');
            msg.channel.send(helpCleverbot);
        } else {
            msg.channel.send(`\\❌ Unknown support category. For a list of categories, please use \`${client.config.prefix}help\`.`);
        }
        
    },
    meta: {
        name: 'help',
        ownerOnly: false,
        description: 'I\'m stuck Where do I go? Oh! Thanks Sky, the extremely helpful bot.',
        usage: ''
    }
}