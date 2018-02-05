module.exports = {
    run: async (client) => {
        console.log(`Sky: logged in as ${client.user.tag}!`);
        (await client.db.table('points').run()).forEach(element => element.earningPoints = true);
        console.log('Set all points profiles to EARNING POINTS.');
    }
}