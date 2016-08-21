'use strict';

import {WS} from 'WS';

export const ADD_WORD = 'ADD_WORD';
export function addWord(en, ru) {
	return {
		type: ADD_WORD,
		word: {
			en,
			ru
		}
	}
}

export const RESET_WORDS = 'RESET_WORDS';
export function resetWords(words) {
	return {
		type: RESET_WORDS,
		words
	}
}

export const ADD_WORD_REQUEST = 'ADD_WORD_REQUEST';
export function addWordRequest(en, ru) {
	const word = {en, ru};
	return {
		type: ADD_WORD_REQUEST,
		word,
		[WS]: [
			{
				name: 'ADD_WORD',
				data: {word}
			}
		]
	}
}