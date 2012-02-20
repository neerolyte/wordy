/**
 * Test pattern matching
 */
var testCase = require('nodeunit').testCase;

module.exports = testCase({
	setUp: function(callback) {
		var wordy = this.wordy = require('..').create([
			'bar', 'bat', 'ball', 'tab', 'samba'
		]);
		callback();
	},
	tearDown: function(callback) {
		callback();
	},
	
	/**
	 * Test REs passed straight in
	 */
	testPatternsRegEx: function(test) {
		test.deepEqual(
			this.wordy.pattern(/ba/).sort(),
			['ball', 'bar', 'bat', 'samba'],
			'/ba/'
		);
		test.deepEqual(
			this.wordy.pattern(/bat|samba/).sort(),
			['bat', 'samba'],
			'/bat|samba/'
		);
		test.deepEqual(
			this.wordy.pattern(/^s/).sort(),
			['samba'],
			'/^s/'
		);
		test.deepEqual(
			this.wordy.pattern(/a$/).sort(),
			['samba'],
			'/a$/'
		);
		test.done();
	},
});
