'use strict';

import React, {Component, PropTypes} from 'react';

export default class AddNewVerb extends Component {

	constructor(props) {
		super(props);

		this.onSubmit = this.onSubmit.bind(this);
	}

	static propTypes = {
		addIrregularVerbRequest: PropTypes.func.isRequired
	};

	onSubmit(e) {
		e.preventDefault();

		let elements = e.target.elements;

		let firstForm = elements['firstForm'].value;
		let secondForm = elements['secondForm'].value;
		let thirdForm = elements['thirdForm'].value;
		let translation = elements['translation'].value;

		let verb = {
			firstForm,
			secondForm,
			thirdForm,
			translation
		};

		this.props.addIrregularVerbRequest(verb);
	}

	render() {
		return (
			<div className="modal fade" id="addNewVerb" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
								aria-hidden="true">&times;</span></button>
							<h4 className="modal-title" id="addNewVerbLabel">Add irregular verb</h4>
						</div>
						<form method="post" action="#" onSubmit={this.onSubmit}>
							<div className="modal-body">
								<div className="form-group">
									<label htmlFor="1form">First form</label>
									<input type="text" className="form-control" id="firstForm" placeholder="First form"
									       name="firstForm"/>
								</div>
								<div className="form-group">
									<label htmlFor="2form">Second form</label>
									<input type="text" className="form-control" id="secondForm"
									       placeholder="Second form" name="secondForm"/>
								</div>
								<div className="form-group">
									<label htmlFor="3form">Third form</label>
									<input type="text" className="form-control" id="thirdForm" placeholder="Third form"
									       name="thirdForm"/>
								</div>
								<div className="form-group">
									<label htmlFor="translation">Translation</label>
									<input type="text" className="form-control" id="translation"
									       placeholder="Translation" name="translation"/>
								</div>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
								<button type="submit" className="btn btn-primary">Save</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}