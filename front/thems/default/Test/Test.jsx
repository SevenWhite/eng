'use strict';

import React, {Component, PropTypes} from 'react';
import PanelHeading, {Links} from '../parts/PanelHeading.jsx';

export default class Test extends Component {
    render() {
        return (
            <div className="panel panel-info">
                <PanelHeading name="Tests" active={Links.TEST}/>
                <div className="panel-body text-center">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-6">
                                <a href="testvocabulary.html"><button type="button" className="btn btn-primary btn-lg">Test vocabulary</button></a>
                            </div>
                            <div className="col-xs-6">
                                <a href="testverbs.html"><button type="button" className="btn btn-primary btn-lg">Test irregular verbs</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}