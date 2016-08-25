'use strict';

import {combineReducers} from 'redux';

import connectionState from './connectionState';
import words from './words';
import selectedWords from './selectedWords';

export default combineReducers({
	connectionState,
	words,
	selectedWords
});