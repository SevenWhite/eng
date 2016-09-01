'use strict';

let mongoose = require('mongoose');
let IrregularVerb = mongoose.model('IrregularVerb');

class IrregularVerbController{
	static* addIrregularVerb(socket, data) {
		let {firstForm, secondForm, thirdForm, translation} = data.verb;

		// todo add error handling

		let irregularVerb = new IrregularVerb({
			firstForm, secondForm, thirdForm, translation
		});

		try {
			irregularVerb = yield irregularVerb.save();
			// todo incorrect call
			socket.emit('dispatch', {actionCreator: 'addIrregularVerbReceive', args: [irregularVerb]})
		} catch (err) {
			socket.emit('dispatch', {actionCreator: 'addIrregularVerbError', args: [err]})
		}
	}
}

module.exports = IrregularVerbController;