module.exports = {
    run: async (client) => {
        const snek = require('snekfetch');
        
        // Sending to bots.discord.pw
        const dbotsRes = snek.post(`https://bots.discord.pw/api/bots/${client.user.id}/stats`)
        .set('Authorization', client.config.dbotsToken)
        .send({ server_count: client.guilds.size });

        // Sending to botsfordiscord.com
        const bfdRes = snek.post(`https://botsfordiscord.com/api/v1/bots/${client.user.id}`)
        .set('Authorization', client.config.bfdToken)
        .send({ server_count: client.guilds.size });
        
        // Sending to discordbots.org
        const { DBL } = require('dblapi.js');
        const dblRes = new DBL(client.config.dblToken);
        dblRes.postStats(client.guilds.size);        
    }
}