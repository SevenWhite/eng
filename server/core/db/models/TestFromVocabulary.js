'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TestFromVocabularySchema = Schema({
	finished: {
		type: Boolean,
		defaultValue: false
	},
	percentageOfCorrectAnswers: {
		type: Number,
		defaultValue: 0
	},
	questions: [{type: Schema.Types.ObjectId, ref: 'Question'}]
});

module.exports = mongoose.model('TestFromVocabulary', TestFromVocabularySchema);