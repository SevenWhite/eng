'use strict';

let app = require('koa')();
let middlewares = require('./middlewares');
let routes = require('./routes');

middlewares(app);
// routes(app);

app.use(function* () {
    yield this.render('root');
});

module.exports = app;
