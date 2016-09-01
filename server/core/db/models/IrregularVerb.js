'use strict';

let mongoose = require('mongoose');

let IrregularVerb = mongoose.Schema({
	firstForm: {
		type: String,
		required: true
	},
	secondForm: {
		type: String,
		required: true
	},
	thirdForm: {
		type: String,
		required: true
	},
	translation: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('IrregularVerb', IrregularVerb);