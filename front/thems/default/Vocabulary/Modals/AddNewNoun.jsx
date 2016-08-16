'use strict';

import React, {Component, PropTypes} from 'react';

export default class AddNewNoun extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    static propTypes = {
        addWord: PropTypes.func.isRequired
    };

    onSubmit(e) {
        e.preventDefault();

        let elements = e.target.elements;

        let word = elements.word.value;
        let translation = elements.translation.value;

        if (!word || !translation) return;

        this.props.addWord(word, translation);
    }
    render() {
        return (
            <div className="modal fade" id="addNewNoun" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="addNewNounLabel">Add new word</h4>
                        </div>
                        <form method="post" action="#" onSubmit={this.onSubmit}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="word">Word</label>
                                    <input type="text" className="form-control" id="word" placeholder="Word" name="word" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="translation">Translation</label>
                                    <input type="text" className="form-control" id="translation" placeholder="Translation" name="translation" />
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