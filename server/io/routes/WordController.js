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
			socket.emit('ADD_WORD_RESPONSE', {word});
		} catch (err) {
			socket.emit('ADD_WORD_ERROR', {err});
		}
	}
}

module.exports = WordController;