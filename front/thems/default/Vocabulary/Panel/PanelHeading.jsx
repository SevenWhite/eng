'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class PanelHeading extends Component {
    render() {
        return (
            <div className="panel-heading">
                <div className="row">
                    <div className="col-xs-6"><h1>Vocabulary</h1></div>
                    <div className="col-xs-6 menu">
                        <ul className="nav nav-pills nav-justified">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/test">Tests</Link></li>
                            <li className="active"><Link to="/vocabulary">Vocabulary</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}