/**
 * Test length filtering
 */
var testCase = require('nodeunit').testCase;

module.exports = testCase({
	setUp: function(callback) {
		var wordy = this.wordy = require('..').create([
			'a', 'at', 'all', 'ball'
		]);
		callback();
	},
	tearDown: function(callback) {
		callback();
	},
	
	/**
	 * Test simple length matching
	 */
	testLengthSingle: function(test) {
		test.deepEqual(
			this.wordy.lengths(1,1).sort(),
			['a'],
			'Length 1 - "a"'
		);
		test.deepEqual(
			this.wordy.lengths(2,2).sort(),
			['at'],
			'Length 2"'
		);
		test.done();
	},
	
	/**
	 * Test length ranges
	 */
	testLengthRange: function(test) {
		test.deepEqual(
			this.wordy.lengths(3,10).sort(),
			['all', 'ball'],
			'Length 3 - 10'
		);
		test.deepEqual(
			this.wordy.lengths(1,3).sort(),
			['a', 'at', 'all'].sort(),
			'Length 1 - 3'
		);
		test.done();
	},
});
