/**
 * First set of functionality tests for wordy
 */
var testCase = require('nodeunit').testCase;

module.exports = testCase({
	setUp: function(callback) {
		var wordy = this.wordy = require('..');
		wordy.setWords([
			'bar', 'bat', 'ball', 'tab', 'samba'
		]);
		callback();
	},
	tearDown: function(callback) {
		callback();
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
			this.wordy.anagrams('ab').sort(),
			[],
			'ab'
		);
		
		this.wordy.setWords(['all', 'ball', 'pinball']);
		test.deepEqual(
			this.wordy.anagrams('abll').sort(),
			['all', 'ball'],
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
			this.wordy.anagrams('ab?').sort(),
			['bar', 'bat', 'tab'],
			'ab + 1 blank'
		);
		// two blanks
		test.deepEqual(
			this.wordy.anagrams('ab??').sort(),
			['ball', 'bar', 'bat', 'tab'],
			'ab + 2 blanks'
		);
		
		// only blanks
		test.deepEqual(
			this.wordy.anagrams('???').sort(),
			['bar', 'bat', 'tab'],
			'words from 3 blanks only'
		);
		test.deepEqual(
			this.wordy.anagrams('????').sort(),
			['ball', 'bar', 'bat', 'tab'],
			'words from 4 blanks only'
		);
		test.done();
	},
});
