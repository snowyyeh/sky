module.exports = {
    run: async (client, msg) => {
        const db = client.points;
        if (!db.has(msg.author.id)) {
            const defaultPointsSchema = {
                points: 0,
                earningPoints: true,
            }
            defaultPointsSchema['id'] = msg.author.id;
            defaultPointsSchema['tag'] = msg.author.tag;
            await db.set(msg.author.id, defaultPointsSchema);
        }
        const points = db.get(msg.author.id);
        if (points.earningPoints) {
            points.points++;
            points.points++;
            points.earningPoints = false;
            await db.set(msg.author.id, points);
            setTimeout(async function() {
                points.earningPoints = await true;
                db.set(msg.author.id, points);
            }, 60000);
        }
    }
}