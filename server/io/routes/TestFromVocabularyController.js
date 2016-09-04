'use strict';

let mongoose = require('mongoose');
let _ = require('lodash');

let TestFromVocabulary = mongoose.model('TestFromVocabulary');
let Question = mongoose.model('Question');
let Word = mongoose.model('Word');

class TestFromVocabularyController {
	static* startTest(emit, data) {
		// There is must be check existing test

		try {
			let test;

			test = yield* TestFromVocabularyController.getExistingTest();

			if (!test) {
				let selectedWordsIds = data.selectedWords;
				test = yield* TestFromVocabularyController.createTest(selectedWordsIds);
			}

			TestFromVocabularyController.sendNextQuestion(emit, test);
		} catch (err) {
			console.log('err', err);
		}

	}

	static* getExistingTest() {
		return yield TestFromVocabulary.findOne({finished: false}).populate({
			path: 'questions',
			populate: {path: 'word', select: 'ru'}
		});
	}

	static* createTest(selectedWordsIds) {
		let wordsLength = selectedWordsIds.length;

		if (wordsLength < 1)
			throw new Error('Words are not found');

		let words = yield Word.find({_id: {$in: selectedWordsIds}});

		if (wordsLength != words.length)
			throw new Error('Words are not found');

		let questions = _.shuffle(words).map(word => new Question({word}).save());
		questions = yield Promise.all(questions);

		let test = new TestFromVocabulary({questions});
		return yield test.save();
	}

	static sendNextQuestion(emit, test) {
		if (test.finished)
			throw new Error('Test is already finished.');

		let nextQuestion = test.questions.find(question => !question.answer);

		emit('nextQuestion', nextQuestion.word.ru)
	}
}

module.exports = TestFromVocabularyController;