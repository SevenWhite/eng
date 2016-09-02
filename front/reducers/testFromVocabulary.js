'use strict';

import {Map} from 'immutable';
import * as actions from '../actions';

const initialState = Map({
	isFetched: false,
	question: Map({
		wordInRussian: 'стол'
	})
});

export default function(state = initialState, action) {
	switch (action.type) {
		case actions.START_TEST_FROM_VOCABULARY:
			if (state.get('isFetched'))
				return state;

			return state.set('isFetched', true);
		default:
			return state;
	}
}