#!/usr/bin/env node
var wordy = require('./lib/wordy');

var args = process.argv.slice(2);

wordy.setWords(['ball', 'bat']);

for (var a in args) {
	console.log(wordy.getWords(args[a]));
}