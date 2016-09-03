'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class Test extends Component {
    render() {
        return (
            <div className="panel-body text-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-6">
                            <Link to="/test/vocabulary"><button type="button" className="btn btn-primary btn-lg">Test from vocabulary</button></Link>
                        </div>
                        <div className="col-xs-6">
                            <Link to="/test/verbs"><button type="button" className="btn btn-primary btn-lg">Test irregular verbs</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}