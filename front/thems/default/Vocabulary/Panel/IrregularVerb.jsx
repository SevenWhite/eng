'use strict';

import React, {Component, PropTypes} from 'react';

export default class IrregularVerb extends Component {
	static propTypes = {
		verb: PropTypes.shape({
			firstForm: PropTypes.string.isRequired,
			secondForm: PropTypes.string.isRequired,
			thirdForm: PropTypes.string.isRequired,
			translation: PropTypes.string.isRequired,
		}).isRequired,
		number: PropTypes.number.isRequired,
	};

	render() {
		const {verb, number} = this.props;
		const {firstForm, secondForm, thirdForm, translation} = verb;

		return (
			<tr>
				<td>{number + 1}</td>
				<td>{firstForm}</td>
				<td>{secondForm}</td>
				<td>{thirdForm}</td>
				<td>{translation}</td>
				<td><input type="checkbox"/></td>
			</tr>
		);
	}
}