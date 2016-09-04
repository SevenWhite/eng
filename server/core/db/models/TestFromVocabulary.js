'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TestFromVocabularySchema = Schema({
	finished: {
		type: Boolean,
		default: false
	},
	percentageOfCorrectAnswers: {
		type: Number,
		default: 0
	},
	questions: [{type: Schema.Types.ObjectId, ref: 'Question'}]
});

module.exports = mongoose.model('TestFromVocabulary', TestFromVocabularySchema);