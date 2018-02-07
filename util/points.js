module.exports = {
    run: async (client, user, multiplier = 1) => {
        const r = client.db;
        if (!await r.table('globalPoints').get(user.id).run()) {
            require('./insertNewPointsUser.js').run(client, user);
        }
        const points = await r.table('globalPoints').get(user.id).run();
        if (points.earningPoints) {
            points.points = points.points * multiplier;
            points.earningPoints = false;
            await r.table('globalPoints').get(user.id).update(points).run();
            setTimeout(async function() {
                points.earningPoints = await true;
                await r.table('globalPoints').get(user.id).update(points).run();
            }, 60000);
        }
    }
}