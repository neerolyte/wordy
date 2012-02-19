#!/usr/bin/env node
var wordy = require('./lib/wordy');
var fs = require('fs');

var args = process.argv.slice(2);

var words = fs.readFileSync(__dirname+'/lists/enable2k.txt', 'ascii').split('\n');

// clean up trailing empty elements
while (words[words.length-1] == '') 
	words.pop();

wordy.setWords(words);

for (var a in args) {
	console.log(wordy.contains(args[a]));
}