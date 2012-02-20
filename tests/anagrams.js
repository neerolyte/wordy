/**
 * First set of functionality tests for wordy
 */
var testCase = require('nodeunit').testCase;

module.exports = testCase({
	/**
	 * Test the ability to find words which are anagrams of the supplied word
	 */
	testAnagrams: function(test) {
		var wordy = require('..').create([
			'bar', 'bat', 'ball', 'tab', 'samba'
		]);
		test.deepEqual(
			wordy.anagrams('abt').sort(),
			['bat', 'tab'],
			'abt'
		);
		test.deepEqual(
			wordy.anagrams('ab').sort(),
			[],
			'ab'
		);
		
		wordy = require('..').create([
			'all', 'ball', 'pinball'
		]);
		test.deepEqual(
			wordy.anagrams('abll').sort(),
			['all', 'ball'],
			'abll'
		);
		test.done();
	},
	
	/**
	 * Test the ability to find words which are anagrams of the supplied word + optional blanks
	 */
	testAnagramBlanks: function(test) {
		var wordy = require('..').create([
			'bar', 'bat', 'ball', 'tab', 'samba'
		]);
		// one blank
		test.deepEqual(
			wordy.anagrams('ab?').sort(),
			['bar', 'bat', 'tab'],
			'ab + 1 blank'
		);
		// two blanks
		test.deepEqual(
			wordy.anagrams('ab??').sort(),
			['ball', 'bar', 'bat', 'tab'],
			'ab + 2 blanks'
		);
		
		// only blanks
		test.deepEqual(
			wordy.anagrams('???').sort(),
			['bar', 'bat', 'tab'],
			'words from 3 blanks only'
		);
		test.deepEqual(
			wordy.anagrams('????').sort(),
			['ball', 'bar', 'bat', 'tab'],
			'words from 4 blanks only'
		);
		test.done();
	},
});
