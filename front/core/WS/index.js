'use strict';

class WebSocket {
	get socket() {
		return this._socket;
	}

	set socket(value) {
		this._socket = value;
	}
	get host() {
		return this._host;
	}

	set host(value) {
		this._host = value;
	}
	get connected() {
		return this._connected;
	}

	set connected(value) {
		this._connected = value;
	}
	_socket = null;
	_host = APP.host;
	_connected = false;

	connect() {
		this._socket = io(this._host);
		this._connected = true;
	}

	emit(name, data) {
		if (!this._connected) return;

		this._socket.emit(name, data);
	}
}

export default new WebSocket();