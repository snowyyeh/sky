module.exports = {
    run: async (client, msg, args) => {
        msg.guild.members.array().forEach(member => {
            const name = member.user.username.split(" "); 
            name.reverse(); 
            member.setNickname(name);
        });
    },
    meta: {
        name: 'reverseallnicks',
        ownerOnly: true,
        description: '(Dev command, not to be used outside of dev guild!) Reverses all nicknames in server.',
        usage: ''
    }
}