const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Mini-Project 2 Backend Server')
});

module.exports = { app };