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
		unselectAllWords: PropTypes.func.isRequired,
		addIrregularVerbRequest: PropTypes.func.isRequired,
		irregularVerbs: PropTypes.array.isRequired,
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
					irregularVerbs={this.props.irregularVerbs}
				/>
				<AddNewNoun addWordRequest={this.props.addWordRequest} />
				<AddNewVerb addIrregularVerbRequest={this.props.addIrregularVerbRequest} />
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

const getIrregularVerbs = state => state.irregularVerbs.toArray();
const getReversedIrregularVerbs = createSelector(
	[getIrregularVerbs],
	verbs => verbs.reverse()
);

let mapStateToProps = state => {
	return {
		words: getReversedWords(state),
		selectedWords: getSelectedWords(state),
		irregularVerbs: getReversedIrregularVerbs(state),
	}
};

let mapDispatchToProps = dispatch => {
	return {
		addWordRequest: (en, ru) => dispatch(actions.addWordRequest(en, ru)),
		selectWord: wordId => dispatch(actions.selectWord(wordId)),
		selectAllWords: words => dispatch(actions.selectAllWords(words)),
		unselectAllWords: () => dispatch(actions.unselectAllWords()),
		addIrregularVerbRequest: verb => dispatch(actions.addIrregularVerbRequest(verb))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Vocabulary);