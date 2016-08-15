'use strict';

import React, {Component, PropTypes} from 'react';

import Panel from './Panel/Panel.jsx';
import AddNewNoun from './Modals/AddNewNoun.jsx';
import AddNewVerb from './Modals/AddNewVerb.jsx';

class Vocabulary extends Component {
    render() {
        return (
            <div>
                <Panel/>
                <AddNewNoun/>
                <AddNewVerb/>
            </div>
        );
    }
}

export default Vocabulary;