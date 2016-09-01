'use strict';

import {WS} from 'WS';

export const ADD_IRREGULAR_VERB_REQUEST = 'ADD_IRREGULAR_VERB_REQUEST';
export function addIrregularVerbRequest(verb) {
	return {
		type: ADD_IRREGULAR_VERB_REQUEST,
		verb,
		[WS]: [
			{
				name: ADD_IRREGULAR_VERB_REQUEST,
				data: {verb}
			}
		]
	}
}

export const ADD_IRREGULAR_VERB_RECEIVE = 'ADD_IRREGULAR_VERB_RECEIVE';
export function addIrregularVerbReceive(verb) {
	return {
		type: ADD_IRREGULAR_VERB_RECEIVE,
		verb
	}
}

export const ADD_IRREGULAR_VERB_ERROR = 'ADD_IRREGULAR_VERB_ERROR';
export function addIrregularVerbError(err) {
	return {
		type: ADD_IRREGULAR_VERB_ERROR,
		err
	}
}

export const RESET_IRREGULAR_VERBS = 'RESET_IRREGULAR_VERBS';
export function resetIrregularVerbs(verbs) {
	return {
		type: RESET_IRREGULAR_VERBS,
		verbs
	}
}