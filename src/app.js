const express = require('express');

const app = express();

const routes = require('./routes');

app.use(express.static('public/html', {
  extensions: ['html', 'htm']
}));
app.use(express.static('public'));
app.use(express.json());

app.use('/api', routes);

module.exports = app;