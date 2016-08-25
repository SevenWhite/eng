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
		words: PropTypes.array.isRequired,
		addWordRequest: PropTypes.func.isRequired,
		selectWord: PropTypes.func.isRequired,
		selectAllWords: PropTypes.func.isRequired,
		selectedWords: PropTypes.array.isRequired,
		unselectAllWords: PropTypes.func.isRequired
	};
	render() {
		return (
			<div>
				<Panel
					words={this.props.words}
					selectWord={this.props.selectWord}
					selectAllWords={this.props.selectAllWords}
					selectedWords={this.props.selectedWords}
				    unselectAllWords={this.props.unselectAllWords}
				/>
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

const getSelectedWords = state => state.selectedWords.toArray();

let mapStateToProps = state => {
	return {
		words: getReversedWords(state),
		selectedWords: getSelectedWords(state)
	}
};

let mapDispatchToProps = dispatch => {
	return {
		addWordRequest: (en, ru) => dispatch(actions.addWordRequest(en, ru)),
		selectWord: wordId => dispatch(actions.selectWord(wordId)),
		selectAllWords: words => dispatch(actions.selectAllWords(words)),
		unselectAllWords: () => dispatch(actions.unselectAllWords())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Vocabulary);