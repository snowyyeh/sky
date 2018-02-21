const express = require('express');
const app = express();
exports.app = app;
app.set('view engine', 'ejs');
app.use(epxress.static('static'));

app.get('/', async (req, res) => {
    res.status(200).sendFile(__dirname + '/static/index.html');
});

app.get('/u', async (req, res) => {
    const client = require('../index.js').client;
    if (!req.query.id) return res.sendFile('./static/invalidprofile.html', {});
    const id = req.query.id;
    if (!client.users.has(id)) return res.sendFile('./static/invalidprofile.html', {});
    const user = {
        tag: client.users.get(id).tag,
        avatarURL: client.users.get(id).avatarURL()
    }
    const info = {
        points: (await client.db.table('globalPoints').get(id).run()).points
    }
    res.render('./views/profile.ejs', {user: user, info: info});
});

app.use(function(req, res) {
    res.status(404).sendFile(__dirname + '/static/404.html');
});
