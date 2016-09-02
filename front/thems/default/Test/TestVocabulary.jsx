'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Loading from '../parts/Loading.jsx';

class TestVocabulary extends Component {
	static propTypes = {
		testFromVocabulary: PropTypes.shape({
			isFetched: PropTypes.bool.isRequired
		}).isRequired
	};

	render() {
		const {testFromVocabulary} = this.props;

		return (
			<div className="panel-body text-center">
				{testFromVocabulary.isFetched ?
					<Loading /> :
					<div className="container-fluid">
						<div className="row">
							<h2>Translate in English:</h2>
							<form action="#" method="post" className="form-inline">
								<h3>Делать</h3><br />
								<input type="text" className="form-control" name="1"/>
								<br /><br />
								<button type="submit" className="btn btn-success btn-lg">Send</button>
							</form>
						</div>
					</div>
				}
			</div>
		);
	}
}

let getTestFromVocabulary = state => state.testFromVocabulary.toObject();

let mapStateToProps = state => {
	return {
		testFromVocabulary: getTestFromVocabulary(state)
	};
};

export default connect(mapStateToProps)(TestVocabulary)