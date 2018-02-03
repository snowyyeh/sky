module.exports = {
    run: async (client, msg, args) => {
        const user = args[0] ? msg.mentions.users.first() || client.users.get(args[0]) : msg.author;
        msg.channel.send(`😀 Avatar of **${user.tag}**...`, { files: [user.avatarURL()] });        
    },
    meta: {
        name: 'avatar',
        ownerOnly: false,
        description: 'Grabs the target\'s Discord avatar.',
        usage: '[%mention%|%user ID%]'
    }
}