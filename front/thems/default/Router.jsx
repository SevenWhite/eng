'use strict';

import React, {Component, PropTypes} from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

import App from './App.jsx';
import Home from './Home/Home.jsx';
import Vocabulary from './Vocabulary/Vocabulary.jsx';
import Test from './Test/Test.jsx';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="vocabulary" component={Vocabulary}/>
            <Route path="test" component={Test}/>
        </Route>
    </Router>
);