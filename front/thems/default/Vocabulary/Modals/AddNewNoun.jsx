'use strict';

import React, {Component, PropTypes} from 'react';

export default class AddNewNoun extends Component {
    render() {
        return (
            <div className="modal fade" id="addNewNoun" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="addNewNounLabel">Add new word</h4>
                        </div>
                        <form method="post" action="#">
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="word">Word</label>
                                    <input type="text" className="form-control" id="word" placeholder="Word" name="word" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="transcription">Transcription</label>
                                    <input type="text" className="form-control" id="transcription" placeholder="Transcription" name="transcription" />
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