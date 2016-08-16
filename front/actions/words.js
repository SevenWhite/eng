'use strict';

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