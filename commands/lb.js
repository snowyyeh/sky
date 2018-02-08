module.exports = {
    run: async (client, msg, args) => {
        const r = client.db;
        const leaderboard = [];
        leaderboard.push('**__DISPLAYING TOP 10 USERS__**');
        var place = 0;
        const lb = (await r.table('globalPoints').run()).sort((a, b) => b.points - a.points).slice(0, 10)
        .forEach(element => {
            place++;
            leaderboard.push(`**[#${place}]** | **${element.tag}** with **${element.points}** points.`);
        });
        leaderboard.push('*The leaderboard is global across all guilds Sky is in.*');
        leaderboard.push('***Some tips?*** *Talk in official Sky guilds (e.g. Jellz\'s Jungle), you get 2x points from those. Gamble - gamble, gamble, gamble. The top users are on the leaderboard because they gambled and they took chances. If you want a chance, check out the bet command. Good luck!*');
        msg.channel.send(leaderboard.join('\n'));
    },
    meta: {
        name: 'lb',
        ownerOnly: false,
        description: 'View the Sky leaderboard.',
        usage: ''
    }
}
