'use strict';

let mongoose = require('mongoose');
let Word = mongoose.model("Word");

class WordController {
	static* addWord(socket, data) {
		const {en, ru} = data.word;

		// todo add error handling

		let word = new Word({
			en,
			ru
		});

		try {
			word = yield word.save();
			// todo incorrect call
			socket.emit('dispatch', {actionCreator: 'addWord', args: [word]});
		} catch (err) {
			//todo wrong actionCreator
			socket.emit('dispatch', {actionCreator: 'ADD_WORD_ERROR', args: [err]});
		}
	}
}

module.exports = WordController;