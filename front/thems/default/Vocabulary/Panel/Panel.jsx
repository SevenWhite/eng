'use strict';

import React, {Component, PropTypes} from 'react';
import PanelHeading, {Links} from '../../parts/PanelHeading.jsx';
import PanelBody from './PanelBody.jsx';

export default class Panel extends Component {
    render() {
        return (
            <div className="panel panel-info">
                <PanelHeading name="Vocabulary" active={Links.VOCABULARY} />
                <PanelBody/>
            </div>
        );
    }
}