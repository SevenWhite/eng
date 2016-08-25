'use strict';

export const SELECT_WORD = 'SELECT_WORD';
export function selectWord(wordId) {
	return {
		type: SELECT_WORD,
		wordId
	}
}

export const SELECT_ALL_WORDS = 'SELECT_ALL_WORDS';
export function selectAllWords(words) {
	return {
		type: SELECT_ALL_WORDS,
		words
	}
}

export const UNSELECT_ALL_WORDS = 'UNSELECT_ALL_WORDS';
export function unselectAllWords() {
	return {
		type: UNSELECT_ALL_WORDS
	}
}