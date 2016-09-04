'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let QuestionSchema = Schema({
	word: {
		type: Schema.Types.ObjectId,
		ref: 'Word',
		required: true
	},
	answer: {
		type: Schema.Types.ObjectId,
		ref: 'Answer'
	}
});

module.exports = mongoose.model('Question', QuestionSchema);