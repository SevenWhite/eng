'use strict';

import {combineReducers} from 'redux';

import connectionState from './connectionState';
import words from './words';

export default combineReducers({
    connectionState,
    words
});