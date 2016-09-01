'use strict';

import React, {Component, PropTypes} from 'react';

import Word from './Word.jsx';
import IrregularVerb from './IrregularVerb.jsx';

export default class PanelBody extends Component {
	static propTypes = {
		words: PropTypes.array.isRequired,
		selectWord: PropTypes.func.isRequired,
		selectAllWords: PropTypes.func.isRequired,
		selectedWords: PropTypes.array.isRequired,
		unselectAllWords: PropTypes.func.isRequired,
		irregularVerbs: PropTypes.array.isRequired,
	};

	constructor(props) {
		super(props);

		this.selectAll = this.selectAll.bind(this);
	}

	selectAll() {
		this.props.selectAllWords(this.props.words);
	}

	wordIsSelected(wordId) {
		return this.props.selectedWords.includes(wordId);
	}

	render() {
		const {words, irregularVerbs} = this.props;
		return (
			<div className="panel-body">
				<div className="tabs">
					<ul className="nav nav-tabs">
						<li className="active"><a href="#words" data-toggle="tab">All words</a></li>
						<li><a href="#verbs" data-toggle="tab">Irregular verbs</a></li>
					</ul>
					<div className="tab-content">
						<div className="tab-pane active" id="words">
							<br />
							<div className="container-fluid">
								<div className="row">
									<div className="col col-md-6">
										<p className="text-left">
											<button type="button" className="btn btn-info btn-md" data-toggle="modal"
											        data-target="#addNewNoun">Add new word
											</button>
										</p>
									</div>
									<div className="col col-md-6">
										<p className="text-right">
											<button type="button" className="btn btn-success btn-md"
											        onClick={this.selectAll}>Select all
											</button>
											<button type="button" className="btn btn-danger btn-md"
											        onClick={this.props.unselectAllWords}>Clear all
											</button>
										</p>
									</div>
								</div>
							</div>

							<table className="table table-hover">
								<thead>
								<tr className="warning">
									<th>№</th>
									<th>Word</th>
									<th>Part of speech</th>
									<th>Translation</th>
									<th>Select</th>
								</tr>
								</thead>
								<tbody>
								{words.map((word, index) => <Word
									key={word.en} word={word} number={index}
									selectWord={this.props.selectWord}
									selected={this.wordIsSelected(word._id)}
								/>)}
								</tbody>
							</table>
						</div>

						<div className="tab-pane" id="verbs">
							<br />
							<div className="container-fluid">
								<div className="row">
									<div className="col col-md-6">
										<p className="text-left">
											<button type="button" className="btn btn-info btn-md" data-toggle="modal"
											        data-target="#addNewVerb">Add new word
											</button>
										</p>
									</div>
									<div className="col col-md-6">
										<p className="text-right">
											<button type="button" className="btn btn-success btn-md">Select all</button>
											<button type="button" className="btn btn-danger btn-md">Clear all</button>
										</p>
									</div>
								</div>
							</div>
							<table className="table table-hover">
								<thead>
								<tr className="warning">
									<th>№</th>
									<th>1-th form</th>
									<th>2-d form</th>
									<th>3-d form</th>
									<th>Translation</th>
									<th>Select</th>
								</tr>
								</thead>
								<tbody>
									{irregularVerbs.map((verb, index) => <IrregularVerb
										verb={verb} number={index} key={verb.firstForm} />)}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}