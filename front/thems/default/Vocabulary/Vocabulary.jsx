'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../../actions';
import Panel from './Panel/Panel.jsx';
import AddNewNoun from './Modals/AddNewNoun.jsx';
import AddNewVerb from './Modals/AddNewVerb.jsx';

class Vocabulary extends Component {
    render() {
        return (
            <div>
                <Panel words={this.props.words} />
                <AddNewNoun addWord={this.props.addWord}/>
                <AddNewVerb/>
            </div>
        );
    }
}

let mapStateToProps = state => {
    return {
        words: state.words.toArray()
    }
};

let mapDispatchToProps = dispatch => {
    return {
        addWord: (en, ru) => dispatch(actions.addWord(en, ru))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Vocabulary);