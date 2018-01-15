module.exports = {
    run: async (client, msg, args) => {
        try {
            const db = client.points;
            const leaderboard = [];
            leaderboard.push('**__DISPLAYING TOP 10 USERS__**');
            var place = 0;
            const lb = db.array().slice(0, 10).sort((b, a) => a.points - b.points)
            .forEach(element => {
                place++;
                leaderboard.push(`**[#${place}]** | **${element.tag}** with **${element.points}** points.`);
            });
            msg.channel.send(leaderboard.join('\n'));
        } catch(err) {
            msg.channel.send('\\❗ An unexpected error has occurred. Don\'t worry! The error has been automatically reported to bot administrators. If you try again and still see this message, wait for a fix. Join the support server found in `;about` for more information.');            
            client.error(client, err.stack, `Command Run`, `**cmd:** ${msg.content} **user:** ${msg.author.tag} (${msg.author.id}) **guild:** ${msg.guild.name} (${msg.guild.id})`);
        }    
    },
    meta: {
        name: 'lb',
        ownerOnly: false,
        description: 'View the Sky leaderboard.',
        usage: ''
    }
}