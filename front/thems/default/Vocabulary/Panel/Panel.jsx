'use strict';

import React, {Component, PropTypes} from 'react';
import PanelHeading, {Links} from '../../parts/PanelHeading.jsx';
import PanelBody from './PanelBody.jsx';

export default class Panel extends Component {
	static propTypes = {
		words: PropTypes.array.isRequired,
		selectWord: PropTypes.func.isRequired,
		selectAllWords: PropTypes.func.isRequired,
		selectedWords: PropTypes.array.isRequired,
		unselectAllWords: PropTypes.func.isRequired
	};

	render() {
		return (
			<div className="panel panel-info">
				<PanelHeading name="Vocabulary" active={Links.VOCABULARY}/>
				<PanelBody
					words={this.props.words}
					selectWord={this.props.selectWord}
					selectAllWords={this.props.selectAllWords}
				    selectedWords={this.props.selectedWords}
				    unselectAllWords={this.props.unselectAllWords}
				/>
			</div>
		);
	}
}