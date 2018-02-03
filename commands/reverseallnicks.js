module.exports = {
    run: async (client, msg, args) => {
        msg.guild.members.array().forEach(member => {
            // thanks FreeCodeCamp.org for this reverse function
            function reverseString(str) {
                var newString = "";
                for (var i = str.length - 1; i >= 0; i--) {
                    newString += str[i];
                }
                return newString;
            }
            member.setNickname(reverseString(member.user.username));
        });
    },
    meta: {
        name: 'reverseallnicks',
        ownerOnly: true,
        description: '(Dev command, not to be used outside of dev guild!) Reverses all nicknames in server.',
        usage: ''
    }
}