module.exports = {
    run: async (client, msg, args) => {
        try {
            const sounds = ['johncena', 'oof', 'airhorn'];
            const resolve = require('path').resolve;
            if (!args[0]) return msg.channel.send('\\❌ Please provide a sound to play. Use `sb list` for a list of sounds.');
            if (args[0] === 'list') {
                msg.channel.send(`\\🎵 **Displaying ${sounds.length} sounds** \\➡ ${sounds.join(', ')}`);
            } else if (sounds.includes(args[0].toLowerCase())) {
                if (!msg.member.voiceChannel) return msg.channel.send('\\❌ You must be in a voice channel to use this command.');
                    const voiceChannel = msg.member.voiceChannel;
                    voiceChannel.join()
                    .then(connection => {
                        const dispatcher = connection.playFile(resolve(`./sounds/${args[0].toLowerCase()}.mp3`));
                        dispatcher.on('end', () => {
                            voiceChannel.leave();
                        });
                    });
            } 
        } catch(err) {
            msg.channel.send('\\❗ An unexpected error has occurred. Don\'t worry! The error has been automatically reported to bot administrators. If you try again and still see this message, wait for a fix. Join the support server found in `;about` for more information.');            
            client.error(client, err.stack, `Command Run`, `**cmd:** ${msg.content} **user:** ${msg.author.tag} (${msg.author.id}) **guild:** ${msg.guild.name} (${msg.guild.id})`);
        }    
    },
    meta: {
        name: 'sb',
        ownerOnly: false,
        description: 'Control the \\🎵 soundboard! \\🎵',
        usage: '<list|%sound name%>'
    }
}