'use strict';

import React, {Component, PropTypes} from 'react';

export default class AddNewVerb extends Component {
    render() {
        return (
            <div className="modal fade" id="addNewVerb" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="addNewVerbLabel">Add irregular verb</h4>
                        </div>
                        <form method="post" action="#">
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="1form">First form</label>
                                    <input type="text" className="form-control" id="1form" placeholder="First form" name="1form" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="2form">Second form</label>
                                    <input type="text" className="form-control" id="2form" placeholder="Second form" name="2form" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="3form">Third form</label>
                                    <input type="text" className="form-control" id="3form" placeholder="Third form" name="3form" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="transcriptionverb">Transcription</label>
                                    <input type="text" className="form-control" id="transcriptionverb" placeholder="Transcription" name="transcriptionverb" />
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