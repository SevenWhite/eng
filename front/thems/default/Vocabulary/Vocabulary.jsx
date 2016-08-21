'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

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

let mapStateToProps = state => {
	const {words} = state;
	return {
		words: words.toArray()
	}
};

let mapDispatchToProps = dispatch => {
	return {
		addWordRequest: (en, ru) => dispatch(actions.addWordRequest(en, ru))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Vocabulary);