'use strict';

import {WS} from 'WS';

export const START_TEST_FROM_VOCABULARY = 'START_TEST_FROM_VOCABULARY';
export function startTestFromVocabulary(selectedWords) {
	return {
		type: START_TEST_FROM_VOCABULARY,
		selectedWords,
		[WS]: [
			{
				name: START_TEST_FROM_VOCABULARY,
				data: {
					selectedWords
				}
			}
		]
	}
}

export const NEXT_QUESTION = 'NEXT_QUESTION';
export function nextQuestion(question) {
	return {
		type: NEXT_QUESTION,
		question
	}
}