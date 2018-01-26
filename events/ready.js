module.exports = {
    run: async (client) => {
        console.log(`Sky: logged in as ${client.user.tag}!`);
        db.array().forEach(element => element.earningPoints = true);
        console.log('Set all points profiles to earning points.');
    }
}