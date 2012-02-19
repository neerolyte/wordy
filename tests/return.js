/**
 * Test to ensure all filtering functions return instances of wordy
 */
var testCase = require('nodeunit').testCase;

module.exports = testCase({
	setUp: function(callback) {
		var words = ['a', 'at', 'all', 'ball'];
		var wordy = this.wordy = require('..').create(words);
		callback();
	},
	tearDown: function(callback) {
		callback();
	},
	
	testInitial: function(test) {
		test.ok(
			this.wordy instanceof require('..').Wordy,
			'First instance'
		);
		test.done();
	},
	
	testLengths: function(test) {
		test.ok(
			this.wordy.lengths(1,1) instanceof require('..').Wordy,
			'Return from lengths'
		);
		test.done();
	},
});
