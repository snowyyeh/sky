module.exports = {
    run: async (client) => {
        console.log(`Sky: logged in as ${client.user.tag}!`);
        (await client.db.table('globalPoints').run()).forEach(element => {
            client.tempProfiles[element.id] = { earningPoints: true, allowedToBet: true };
        });
        console.log('Set all points profiles to EARNING POINTS.');
        
    }
}