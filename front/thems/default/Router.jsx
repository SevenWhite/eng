'use strict';

import React, {Component, PropTypes} from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

import store from '../../store';
import * as actions from '../../actions';
import App from './App.jsx';
import Home from './Home/Home.jsx';
import Vocabulary from './Vocabulary/Vocabulary.jsx';
import TestWrap from './Test/TestWrap.jsx';
import Test from './Test/Test.jsx';
import TestFromVocabulary from './Test/TestFromVocabulary.jsx';
import TestVerbs from './Test/TestVerbs.jsx';

export default (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="vocabulary" component={Vocabulary}/>
			<Route path="test" component={TestWrap}>
				<IndexRoute component={Test}/>
				<Route path="vocabulary" component={TestFromVocabulary} onEnter={startTestFromVocabulary} />
				<Route path="verbs" component={TestVerbs}/>
			</Route>
		</Route>
	</Router>
);

function startTestFromVocabulary() {
	store.dispatch(actions.startTestFromVocabulary(store.getState().selectedWords.toArray()));
}