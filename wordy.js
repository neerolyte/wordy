#!/usr/bin/env node
var fs = require('fs');
var repl = require('repl');

var args = process.argv.slice(2);

var words = fs.readFileSync(__dirname+'/lists/enable2k.txt', 'ascii').split('\n');

// clean up trailing empty elements
while (words[words.length-1] == '') {
	words.pop();
}


var wordy = require('./lib/wordy').create(words);

var r = repl.start('wordy> ');
r.context.wordy = wordy;