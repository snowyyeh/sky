module.exports = {
    run: async (client, msg) => {
        const r = client.db;
        if (!await r.table('globalPoints').get(msg.author.id).run()) {
            const defaultPointsSchema = {
                points: 0,
                earningPoints: true,
            }
            defaultPointsSchema['id'] = msg.author.id;
            defaultPointsSchema['tag'] = msg.author.tag;
            await r.table('points').get(msg.author.id).update(defaultPointsSchema).run();
        }
        const points = await r.table('globalPoints').get(msg.author.id).run();
        if (points.earningPoints) {
            points.points++;
            points.points++;
            points.earningPoints = false;
            await r.table('points').get(msg.author.id).update(points).run();
            setTimeout(async function() {
                points.earningPoints = await true;
                await r.table('globalPoints').get(msg.author.id).update(points).run();
            }, 60000);
        }
    }
}