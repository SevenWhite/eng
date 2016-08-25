'use strict';

let mongoose = require('mongoose');
let Word = mongoose.model("Word");

class WordController {
	static* addWord(socket, data) {
		const {en, ru} = data.word;
		let word = new Word({
			en,
			ru
		});

		try {
			word = yield word.save();
			socket.emit('dispatch', {actionCreator: 'addWord', args: [word]});
		} catch (err) {
			socket.emit('dispatch', {actionCreator: 'ADD_WORD_ERROR', args: [err]});
		}
	}
}

module.exports = WordController;