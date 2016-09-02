'use strict';

import React, {Component, PropTypes} from 'react';

export default class Loading extends Component {
	render() {
		return (
			<div>
				<div className="progress">
					<div className="progress-bar progress-bar-striped active" role="progressbar" style={{width: '100%'}} />
				</div>
				<div className="text-center">Loading...</div>
			</div>
		);
	}
}