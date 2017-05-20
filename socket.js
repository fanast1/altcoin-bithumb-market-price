'use strict';

const config = require('config');
const socketConfig = config.socket;

const io = require('socket.io');
const pino = require('pino')({
    "level": "trace",
    "slowtime": true
});


//
//

const list = { };

const signValid = {
    "apiKey": { require: true, sizeFixed: true, size: 32, },
    "apiSecret": { require: true, sizeFixed: true, size: 32, }
};

module.exports = function(server) {
    let _io = io.listen(server, () => {
        pino.info('socket listen');
    });

    _io.sockets.on('connection', client => {
        pino.info('socket connection');

        client.emit('message', 'socket connection success');
        client.on('message', message => pino.info(message));

        client.on('sign', object => {

            let message = null;

            outter: {
                for(let key in signValid) {

                    let objectValue = object[key];
                    let validValue = signValid[key];

                    if(objectValue || validValue.require) {
                        message = 'please enter : ' + key;
                        break outter;
                    }

                    if(validValue.sizeFixed && (!objectValue.length === validValue.size)) {
                        message = 'size fixed : ' + validValue.size;
                        break outter;
                    }
                }

                client.emit('sign');
            }

            if(message) {
                client.emit('message', message);
            }
        });

        client.on('disconnect', () => {
            pino.info('disconnect')
        });
    });

    return _io;
};
