'use strict';

import React, {Component, PropTypes} from 'react';
import PanelHeading from './PanelHeading.jsx';
import PanelBody from './PanelBody.jsx';

export default class Panel extends Component {
    render() {
        return (
            <div className="panel panel-info">
                <PanelHeading/>
                <PanelBody/>
            </div>
        );
    }
}