module.exports = {
    run: async (client, user) => {
        const db = client.points;
        const defaultPointsSchema = {
            points: 0,
            earningPoints: true,
        }
        defaultPointsSchema['id'] = user.id;
        defaultPointsSchema['tag'] = user.tag;
        db.set(user.id, defaultPointsSchema);
    }
}