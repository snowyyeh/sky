module.exports = {
    run: async (client, msg, args) => {
        const db = client.points;
        const leaderboard = [];
        leaderboard.push('**__DISPLAYING TOP 10 USERS__**');
        var place = 0;
        const lb = db.array().sort((a, b) => b.points - a.points).slice(0, 10)
        .forEach(element => {
            place++;
            leaderboard.push(`**[#${place}]** | **${element.tag}** with **${element.points}** points.`);
        });
        msg.channel.send(leaderboard.join('\n'));
    },
    meta: {
        name: 'lb',
        ownerOnly: false,
        description: 'View the Sky leaderboard.',
        usage: ''
    }
}
