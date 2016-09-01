'use strict';

let config = require('config');
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

/* models */
require('./models/Word');
require('./models/IrregularVerb');

class Database {
	constructor() {
		mongoose.connect('mongodb:' + config.get('mongo.host') + config.get('mongo.dbname'));
		this.listen();
	}

	listen() {
		let db = mongoose.connection;
		db.on('error', console.error.bind(console, 'Connection error'));
		db.once('open', () => {
			console.log('Connection successfully created');
		});
	}
}

module.exports = new Database();