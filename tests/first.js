/**
 * First set of functionality tests for wordy
 */
var testCase = require('nodeunit').testCase;

module.exports = testCase({
	setUp: function(callback) {
		var wordy = this.wordy = require('..');
		wordy.setWords(['bar', 'bat', 'ball', 'tab']);
		callback();
	},
	tearDown: function(callback) {
		callback();
	},
	/**
	 * Test the ability to find words which contain all the requested letters
	 */
	testContains: function(test) {
		test.deepEqual(
			this.wordy.contains('tab').sort(),
			['bat', 'tab'],
			'tab'
		);
		test.deepEqual(
			this.wordy.contains('lab'),
			['ball'],
			'lab'
		);
		// sorted because a multiple result may not be returned in order
		test.deepEqual(
			this.wordy.contains('a').sort(),
			['ball', 'bar', 'bat', 'tab'],
			'a'
		);
		test.done();
	},
	
	/**
	 * Test the ability to find words which are anagrams of the supplied word
	 */
	testAnagrams: function(test) {
		test.deepEqual(
			this.wordy.anagrams('abt').sort(),
			['bat', 'tab'],
			'abt'
		);
		test.deepEqual(
			this.wordy.anagrams('ab'),
			[],
			'ab'
		);
		
		this.wordy.setWords(['all', 'ball', 'pinball']);
		test.deepEqual(
			this.wordy.anagrams('abll'),
			['ball'],
			'abll'
		);
		test.done();
	},
	
	/**
	 * Test the ability to find words which are anagrams of the supplied word + optional blanks
	 */
	testAnagramBlanks: function(test) {
		// one blank
		test.deepEqual(
			this.wordy.anagrams('ab', 1).sort(),
			['bar', 'bat', 'tab'],
			'ab + 1 blank'
		);
		// two blanks
		test.deepEqual(
			this.wordy.anagrams('ab', 2).sort(),
			['ball'],
			'ab + 2 blanks'
		);
		// only blanks
		test.deepEqual(
			this.wordy.anagrams('', 3).sort(),
			['bar', 'bat', 'tab'],
			'words from 3 blanks only'
		);
		test.deepEqual(
			this.wordy.anagrams('', 4).sort(),
			['ball'],
			'words from 4 blanks only'
		);
		test.done();
	},
});
