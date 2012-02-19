/**
 * First basic test to load a large list of words using <string>.split('\n')
 * ... 55ms on my CPU
 * I had thought it was going to be really slow, but it turns out all the time was wasted
 * rendering JSON back on to the screen for debugging... split() is probably good enough (at least for now)
 */


var testCase = require('nodeunit').testCase;
var fs = require('fs');


module.exports = testCase({
	/**
	 * Test speed of split
	 */
	testSplitPerformance: function(test) {
		var words = fs.readFileSync(__dirname+'/lists/enable2k.txt', 'ascii').split('\n');

		test.done();
	},
});
