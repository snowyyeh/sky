module.exports = {
    run: async (client, user, multiplier = 1) => {
        const r = client.db;
        if (!await r.table('globalPoints').get(user.id).run()) return require('./insertNewPointsUser.js').run(client, user, multiplier);
        if (!client.tempProfiles[user.id].earningPoints) return;
        const profile = await r.table('globalPoints').get(user.id).run();
        
        profile['points'] += await 2 * multiplier;
        profile['tag'] = await user.tag;

        await r.table('globalPoints').get(user.id).update(profile).run();

        client.tempProfiles[user.id].earningPoints = await false;
        setTimeout(async function() {
            client.tempProfiles[user.id].earningPoints = await true;
        }, 60000);
    }
}