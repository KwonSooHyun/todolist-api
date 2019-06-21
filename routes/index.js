const express = require('express');
const api = require('./api');

const routes = express();

routes.use('/list', api);

module.exports = routes;