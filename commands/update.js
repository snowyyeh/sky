module.exports = {
    run: async (client, msg, args) => {
        const m = await msg.channel.send('<a:skyloading:397962260540293120> Pulling latest code...');
        require('child_process').exec('./pull.sh', (error, stdout, stderr) => {
            if (error) {
                msg.channel.send(error);
                return console.error(error);
            }
            m.edit('✅ Successfully pulled latest code from jellz/Sky. Dependencies were not installed.\n\n**Output:** ' + stdout);
        });
    },
    meta: {
        name: 'update',
        ownerOnly: true,
        description: 'Pulls latest code from jellz/Sky.',
        usage: ''
    }
}