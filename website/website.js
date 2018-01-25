const express = require('express');
const app = express();
exports.app = app;

app.get('/', async (req, res) => {
    res.status(200).sendFile(__dirname + '/static/index.html');
});
