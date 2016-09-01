'use strict';

let co = require('co');
let WordController = require('./WordController');
let IrregularVerbController = require('./IrregularVerbController');

let routes = new Map();

routes.set('ADD_WORD', WordController.addWord);
routes.set('ADD_IRREGULAR_VERB_REQUEST', IrregularVerbController.addIrregularVerb);

module.exports = function(socket) {
	routes.forEach((generator, route) => socket.on(route, data => co(generator.bind(socket, socket, data))));
};