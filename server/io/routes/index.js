'use strict';

let co = require('co');
let WordController = require('./WordController');
let IrregularVerbController = require('./IrregularVerbController');
let TestFromVocabularyController = require('./TestFromVocabularyController');

let routes = new Map();

routes.set('ADD_WORD', WordController.addWord);
routes.set('ADD_IRREGULAR_VERB_REQUEST', IrregularVerbController.addIrregularVerb);
routes.set('START_TEST_FROM_VOCABULARY', TestFromVocabularyController.startTest);

module.exports = function(socket) {
	routes.forEach((generator, route) => socket.on(route, data => co(generator.bind(socket, emit, data))));

	function emit(actionCreator, ...args) {
		socket.emit('dispatch', {actionCreator, args});
	}
};