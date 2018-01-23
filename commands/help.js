module.exports = {
    run: async (client, msg, args) => {
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
        }
        
    },
    meta: {
        name: 'help',
        ownerOnly: false,
        description: 'I\'m stuck Where do I go? Oh! Thanks Sky, the extremely helpful bot.',
        usage: ''
    }
}