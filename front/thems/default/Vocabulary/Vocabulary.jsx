'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';

import * as actions from '../../../actions';
import Panel from './Panel/Panel.jsx';
import AddNewNoun from './Modals/AddNewNoun.jsx';
import AddNewVerb from './Modals/AddNewVerb.jsx';

class Vocabulary extends Component {
	static propTypes = {
		words: PropTypes.array.isRequired
	};
	render() {
		return (
			<div>
				<Panel words={this.props.words}/>
				<AddNewNoun addWordRequest={this.props.addWordRequest} />
				<AddNewVerb/>
			</div>
		);
	}
}

const getWords = state => state.words.toArray();
const getReversedWords = createSelector(
	[getWords],
	words => words.reverse()
);

let mapStateToProps = state => {
	return {
		words: getReversedWords(state)
	}
};

let mapDispatchToProps = dispatch => {
	return {
		addWordRequest: (en, ru) => dispatch(actions.addWordRequest(en, ru))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Vocabulary);