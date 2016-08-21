'use strict';

let mongoose = require('mongoose');

let WordSchema = mongoose.Schema({
	en: {
		type: String,
		required: true
	},
	ru: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Word', WordSchema);