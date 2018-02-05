module.exports = {
    run: async (client, user) => {
        const r = client.db;
        const defaultPointsSchema = {
            points: 0,
            earningPoints: true,
        }
        defaultPointsSchema['id'] = user.id;
        defaultPointsSchema['tag'] = user.tag;
        await r.table('globalPoints').insert(defaultPointsSchema).run();
    }
}