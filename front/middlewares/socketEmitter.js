'use strict';

import ws, {WS} from 'WS';

export default store => next => action => {
	let messages = action[WS];
	if (typeof messages === 'undefined') {
		return next(action);
	}

	messages.forEach(message => {
		const {name, data, cb} = message;
		ws.emit(name, data, cb);
	});

	return next(action);
};