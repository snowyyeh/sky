module.exports = {
    run: async (client, msg, args) => {
        if (!args[0]) return msg.channel.send('\\❌ Please provide a number of points to bet.');
        const db = client.points;
        const profile = db.get(msg.author.id);
        if (isNaN(args[0])) return msg.channel.send('\\❌ You can only bet a *number* of points.');
        args[0] = Math.floor(args[0]);
        if (args[0] < 0 || args[0] == 0) return msg.channel.send('\\❤ Stay positive. ');
        if (args[0] > profile['points']) return msg.channel.send('\\❌ You don\'t have that many points, bucko!');
        const m = await msg.channel.send('<a:skyloading:397962260540293120> Placing bet...');
        setTimeout(function() {
            m.edit('<a:skyrolling:401999822128939018> Fetching results...');
        }, 2000);
        await setTimeout(function() {
            if (Math.random() > 0.65) { // You lost hahaha
                m.edit(`\\❌ **You lost!** -${args[0]} points.`);
                profile['points'] = profile['points'] - args[0];
            } else { // You won GG!
                m.edit(`\\✅ **You won!** +${args[0]} points.`);
                profile['points'] = profile['points'] + args[0] * 2;
            }
            db.set(msg.author.id, profile);
        }, 2000);   
    },
    meta: {
        name: 'bet',
        ownerOnly: false,
        description: 'Test your luck by gambling Sky Points™.',
        usage: '<%amount of points%>'
    }
}