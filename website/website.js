const express = require('express');
const app = express();
exports.app = app;

app.get('/', async (req, res) => {
    res.status(200).sendFile(__dirname + '/static/index.html');
});

app.get('/u', async (req, res) => {
    const client = require('../index.js').client;
    if (!req.query['id']) return res.send('Id required');
});

app.use(function(req, res) {
    res.status(404).sendFile(__dirname + '/static/404.html');
});
