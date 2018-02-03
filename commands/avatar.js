module.exports = {
    run: async (client, msg, args) => {
        const user = args[0] ? msg.mentions.users.first() || client.users.get(args[0]) : msg.author;
        const m = await msg.channel.send(`<a:skyloading:397962260540293120> Grabbing avatar of **${user.tag}**...`);
        m.edit(`\\😀 Avatar of **${user.tag}**...`, { files: [user.avatarURL()] });        
    },
    meta: {
        name: 'avatar',
        ownerOnly: false,
        description: 'Grabs the target\'s Discord avatar.',
        usage: '[%mention%|%user ID%]'
    }
}