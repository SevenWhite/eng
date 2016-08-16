'use strict';

import React, {Component, PropTypes} from 'react';

import {Provider} from 'react-redux';
import store from '../../store';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">{this.props.children}</div>
            </Provider>
        );
    }
}