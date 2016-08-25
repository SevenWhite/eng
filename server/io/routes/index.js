'use strict';

let co = require('co');
let WordController = require('./WordController');

let routes = new Map();

routes.set('ADD_WORD', WordController.addWord);

module.exports = function(socket) {
	routes.forEach((generator, route) => socket.on(route, data => co(generator.bind(socket, socket, data))));
};