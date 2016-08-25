'use strict';

let mongoose = require('mongoose');
let co = require('co');

let routes = require('./routes');
let Word = mongoose.model("Word");

module.exports = function(io) {
	io.on('connection', socket => {
		co(function* () {
			let words = yield Word.find();
			socket.emit('dispatch', {actionCreator: 'resetWords', args: [words]});
		}).catch(err => {
			console.error('Caught exception!', err.stack);
		});

		routes(socket);
	});
};