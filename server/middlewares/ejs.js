'use strict';

let render = require('koa-ejs');
let path = require('path');
const NODE_ENV = process.env.NODE_ENV;

module.exports = function(app) {
    render(app, {
        root: path.join(__dirname, '../views'),
        layout: false,
        viewExt: 'ejs',
        cache: (NODE_ENV == 'production'),
        debug: (NODE_ENV == 'development')
    });
};