'use strict';

import {List} from 'immutable';

import * as actions from '../actions';

const initialState = List();

export default function (state = initialState, action) {
	switch (action.type) {
		case actions.UNSELECT_ALL_WORDS:
			return List();
		case actions.SELECT_ALL_WORDS:
			let wordsIds = action.words.map(word => word._id);
			return List(wordsIds);
		case actions.SELECT_WORD:
			let wordKey = state.findKey(wordId => wordId == action.wordId);
			if (wordKey !== undefined) {
				return state.delete(wordKey);
			} else {
				return state.push(action.wordId);
			}
		default:
			return state;
	}
}