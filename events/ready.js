module.exports = {
    run: async (client) => {
        console.log(`Sky: logged in as ${client.user.tag}!`);
        client.points.array().forEach(element => element.earningPoints = true).then(() => console.log('Set all points profiles to EARNING POINTS.'));
    }
}