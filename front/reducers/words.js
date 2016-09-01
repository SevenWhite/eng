'use strict';

import {List} from 'immutable';
import * as actions from '../actions';

export default (state = List(), action) => {
	switch (action.type) {
		case actions.RESET_WORDS:
			return List(action.words);
		case actions.ADD_WORD:
			return state.push(action.word);
		default:
			return state;
	}
};