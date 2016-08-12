'use strict';

let home = require('./home');

let routers = [
    home
];

module.exports = function(app) {
    routers.map(router => app.use(router.routes()));
};