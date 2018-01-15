module.exports = {
    run: /* async breaks it */ (client, msg, file) => {
        const meta = file.meta;
        if (meta.ownerOnly) {
            if (msg.author.id !== client.config.ownerID) return false;
        }
        return true;
    }
}