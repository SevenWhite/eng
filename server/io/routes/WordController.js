'use strict';

let mongoose = require('mongoose');
let Word = mongoose.model("Word");

class WordController {
	static* addWord(emit, data) {
		const {en, ru} = data.word;

		// todo add error handling

		let word = new Word({
			en,
			ru
		});

		try {
			word = yield word.save();
			// todo incorrect call
			emit('addWord', word);
		} catch (err) {
			//todo wrong actionCreator
			emit('ADD_WORD_ERROR', err);
		}
	}
}

module.exports = WordController;