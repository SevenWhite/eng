'use strict';

import React, {Component, PropTypes} from 'react';

export default class PanelHeading extends Component {
    render() {
        return (
            <div className="panel-heading">
                <div className="row">
                    <div className="col-xs-6"><h1>Vocabulary</h1></div>
                    <div className="col-xs-6 menu">
                        <ul className="nav nav-pills nav-justified">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="test.html">Tests</a></li>
                            <li className="active"><a href="vocabulary.html">Vocabulary</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}