/**
 * First set of functionality tests for wordy
 */
var testCase = require('nodeunit').testCase;

module.exports = testCase({
	setUp: function(callback) {
		var wordy = this.wordy = require('..');
		wordy.setWords(['bar', 'bat', 'ball']);;
		callback();
	},
	tearDown: function(callback) {
		callback();
	},
	/**
	 * Test the ability to find words which contain all the requested letters
	 */
	testContains: function(test) {
		test.deepEqual(this.wordy.contains('tab'), ['bat']);
		test.deepEqual(this.wordy.contains('lab'), ['ball']);
		// sorted because a multiple result may not be returned in order
		test.deepEqual(
			this.wordy.contains('a').sort(),
			['bar', 'ball', 'bat'].sort()
		);
		test.done();
	},
});
