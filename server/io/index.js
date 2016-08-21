'use strict';

let mongoose = require('mongoose');
let co = require('co');

let Word = mongoose.model("Word");

module.exports = function(io) {
	io.on('connection', socket => {
		co(function* () {
			let words = yield Word.find();
			socket.emit('dispatch', {actionCreator: 'resetWords', args: [words]});
		}).catch(err => {
			console.error('Caught exception!', err.stack);
		});

		socket.on('ADD_WORD', data => {
			const {en, ru} = data.word;
			let word = new Word({
				en,
				ru
			});

			word.save()
				.then(word => socket.emit('ADD_WORD_RESPONSE', {word}))
				.catch(err => socket.emit('ADD_WORD_ERROR', {err}));
		});
	});
};