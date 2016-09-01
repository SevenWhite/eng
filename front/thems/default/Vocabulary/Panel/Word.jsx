'use strict';

import React, {Component, PropTypes} from 'react';

export default class Word extends Component {
	static propTypes = {
		word: PropTypes.shape({
			en: PropTypes.string.isRequired,
			ru: PropTypes.string.isRequired
		}).isRequired,
        number: PropTypes.number.isRequired,
		selectWord: PropTypes.func.isRequired,
		selected: PropTypes.bool.isRequired
	};

	constructor(props) {
		super(props);

		this.selectWord = this.selectWord.bind(this);
	}

	selectWord() {
		this.props.selectWord(this.props.word._id);
	}

	render() {
		const {word, number} = this.props;
		return (
			<tr>
				<td>{number + 1}</td>
				<td>{word.en}</td>
				<td>noun</td>
				<td>{word.ru}</td>
				<td><input type="checkbox" onChange={this.selectWord} checked={this.props.selected} /></td>
			</tr>
		);
	}
}