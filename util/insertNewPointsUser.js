module.exports = {
    run: async (client, user, multiplier = 1) => {
        const r = client.db;
        const defaultPointsSchema = { 
            points: 2 * multiplier,
            id: user.id,
            tag: user.tag
        };
        await r.table('globalPoints').insert(defaultPointsSchema).run();
        client.tempProfiles[user.id].earningPoints = await false;
        setTimeout(async function() {
            client.tempProfiles[user.id].earningPoints = await true;
        }, 60000);
    }
}