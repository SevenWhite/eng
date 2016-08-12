'use strict';

let app = require('koa')();
let middlewares = require('./middlewares');
let routes = require('./routes');

middlewares(app);
routes(app);

module.exports = app;
