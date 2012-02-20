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
			this.wordy.contains('lab').sort(),
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
});
