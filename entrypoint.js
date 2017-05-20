'use strict';

const config = require('./config');

const pino = require('pino')(config.logger || {
    "level": "trace",
    "slowtime": true
});

const express = require('./express-server');
const restify = require('./restify-server');
const socket = require('./socket');

//
//


const expressServer = express.listen(config.express.port || 80, () => {
    pino.info('start express :: ' + (config.express.port || 'default'));
});

const socketServer = socket(expressServer);