'use strict';

import {List} from 'immutable';
import * as actions from '../actions';

export default function(state = List(), action) {
	switch (action.type) {
		case actions.ADD_IRREGULAR_VERB_RECEIVE:
			return state.push(action.verb);
		case actions.RESET_IRREGULAR_VERBS:
			return List(action.verbs);
		default:
			return state;
	}
}