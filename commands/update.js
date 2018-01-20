module.exports = {
    run: async (client, msg, args) => {
        require('child_process').exec('./pull.sh', (error, stdout, stderr) => {
            if (error) {
                msg.channel.send(error);
                return console.error(error);
            }
            msg.channel.send('✅ Successfully pulled latest code from jellz/Sky, installed new dependencies & restarted Sky.\n\n**Output:** ' + stdout);
        });        
    },
    meta: {
        name: 'ping',
        ownerOnly: false,
        description: 'Ping, pong!',
        usage: ''
    }
}