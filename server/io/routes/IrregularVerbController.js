'use strict';

let mongoose = require('mongoose');
let IrregularVerb = mongoose.model('IrregularVerb');

class IrregularVerbController{
	static* addIrregularVerb(emit, data) {
		let {firstForm, secondForm, thirdForm, translation} = data.verb;

		// todo add error handling

		let irregularVerb = new IrregularVerb({
			firstForm, secondForm, thirdForm, translation
		});

		try {
			irregularVerb = yield irregularVerb.save();
			// todo incorrect call
			emit('addIrregularVerbReceive', irregularVerb)
		} catch (err) {
			emit('addIrregularVerbError', err)
		}
	}
}

module.exports = IrregularVerbController;