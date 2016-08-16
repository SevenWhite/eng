'use strict';

import React, {Component, PropTypes} from 'react';

export default class TestVocabulary extends Component {
    render() {
        return (
            <div className="panel-body text-center">
                <div className="container-fluid">
                    <div className="row">
                        <h2>Translate in English:</h2>
                        <form action="#" method="post" className="form-inline">
                            <h3>Делать</h3><br />
                            <input type="text" className="form-control" name="1" />
                            <br /><br />
                            <button type="submit" className="btn btn-success btn-lg">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}