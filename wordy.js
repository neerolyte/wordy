function letterMatch(letters, word) {
	for (var l in letters) {
		var letter = letters[l];
		var i = word.indexOf(letter);
		if (i == -1)
			return false;
		// remove matched letter from word
		word = word.slice(0, i) + word.slice(i+1);
	}
	return true;
}

function getWords(letters) {
	var matches = [];

	for (var w in words) {
		var word = words[w];
		if (letterMatch(letters, word))
			matches.push(word)
	}
	
	return matches;
}

console.log(getWords('BALLZUIO'));
