'use strict';

import React, {Component, PropTypes} from 'react';
import PanelHeading, {Links} from '../parts/PanelHeading.jsx';

export default class TestWrap extends Component {
    render() {
        return (
            <div className="panel panel-info">
                <PanelHeading name="Tests" active={Links.TEST}/>
                {this.props.children}
            </div>
        );
    }
}