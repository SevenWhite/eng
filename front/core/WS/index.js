'use strict';

import * as actions from '../../actions';

export const WS = Symbol('WS');

class WebSocket {
	_socket = null;
	_host = APP.host;
	_connected = false;
	_dispatch = null;

	connect(dispatch) {
		this._socket = io(this._host);
		this._connected = true;
		this._dispatch = dispatch;
		this.listen();
	}

	listen() {
		if (!this._connected) return;

		this._socket.on('dispatch', settings => {
			const {actionCreator, args} = settings;
			this._dispatch(actions[actionCreator](...args));
		});
	}

	emit(name, data, cb) {
		if (!this._connected) return;

		if (cb && typeof cb !== 'function')
			throw new Error('Callback must be function');

		this._socket.emit(name, data, cb);
	}
}

export default new WebSocket();