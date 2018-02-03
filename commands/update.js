module.exports = {
    run: async (client, msg, args) => {
        require('child_process').exec('./pull.sh', (error, stdout, stderr) => {
            if (error) {
                msg.channel.send(error);
                return console.error(error);
            }
            msg.channel.send('✅ Successfully pulled latest code from jellz/Sky. Dependencies were not installed.\n\n**Output:** ' + stdout);
        });
    },
    meta: {
        name: 'update',
        ownerOnly: true,
        description: 'Pulls latest code from jellz/Sky.',
        usage: ''
    }
}