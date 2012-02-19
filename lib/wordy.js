(function(exports){

	/**
	 * Raw list of words we are searching over
	 */
	var words = [];
	
	var letterMatch = function(letters, word) {
		for (var l in letters) {
			var letter = letters[l];
			var i = word.indexOf(letter);
			if (i == -1)
				return false;
			// remove matched letter from word
			word = word.slice(0, i) + word.slice(i+1);
		}
		return true;
	};
	
	var contains = function(letters) {
		var matches = [];
		
		for (var w in this.words) {
			var word = this.words[w];
			if (letterMatch(letters, word))
				matches.push(word)
		}
		
		return matches;
	};
	exports.contains = contains;

	/**
	 * Set the word list to a passed array of words
	 */
	var setWords = function(words) {
		this.words = words;
	};
	exports.setWords = setWords;
})(typeof exports === 'undefined' ? this['wordy']={} : exports);