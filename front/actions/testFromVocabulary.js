'use strict';

import {WS} from 'WS';

export const START_TEST_FROM_VOCABULARY = 'START_TEST_FROM_VOCABULARY';
export function startTestFromVocabulary() {
	return {
		type: START_TEST_FROM_VOCABULARY,
		[WS]: [
			{
				name: START_TEST_FROM_VOCABULARY
			}
		]
	}
}