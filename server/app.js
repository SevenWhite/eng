'use strict';

let app = require('koa')();
let middlewares = require('./middlewares');
let server = require('http').createServer(app.callback());
let io = require('socket.io')(server);
require('db');
let socketInit = require('./io');

// let routes = require('./routes');

middlewares(app);
// routes(app);

app.use(function*() {
	yield this.render('root');
});

socketInit(io);

module.exports = server;
