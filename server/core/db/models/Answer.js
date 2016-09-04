'use strict';

let mongoose = require('mongoose');

let AnswerSchema = mongoose.Schema({
	text: {
		type: String,
		required: true,
	},
	correctly: {
		type: Boolean,
		required: true
	}
});

module.exports = mongoose.model('Answer', AnswerSchema);