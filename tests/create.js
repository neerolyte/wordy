/**
 * Test various instantiation options
 */
var testCase = require('nodeunit').testCase;

module.exports = testCase({
	/**
	 * Test creating with an array of words
	 */
	testCreateArray: function(test) {
		var wordy = require('..').create([
			'foo', 'bar'
		]);
		test.deepEqual(
			wordy.sort(),
			['bar', 'foo'],
			"['foo', 'bar']"
		);
		test.done();
	},
	testCreateString: function(test) {
		var wordy = require('..').create("foo\nbar");
		test.deepEqual(
			wordy.sort(),
			['bar', 'foo'],
			"'foo\\nbar'"
		);
		test.done();
	},
});