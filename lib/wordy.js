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
	 * Find anagrams of the passed in letters + optional blanks
	 */
	var anagrams = function(letters, blanks) {
		var matches = [];

		// extract blanks '?'
		var tmp = letters.split('?');
		letters = tmp.join('');
		blanks = tmp.length - 1;
		
		for (var w in this.words) {
			var word = this.words[w];
			if (anagramLetterMatch(word, letters, blanks))
				matches.push(word)
		}
		
		return matches;
	};
	exports.anagrams = anagrams;

	/**
	 * Should only be called by anagrams()
	 */
	var anagramLetterMatch = function(word, letters, blanks) {
		for (var c in word) {
			var char = word[c];
			var i = letters.indexOf(char);
			if (i == -1) {
				if (blanks > 0)
					blanks--;
				else
					return false;
			}
			// remove matched letter from letters
			letters = letters.slice(0, i) + letters.slice(i+1);
		}
		return true;
	};

	/**
	 * Set the word list to a passed array of words
	 */
	var setWords = function(words) {
		this.words = words;
	};
	exports.setWords = setWords;
})(typeof exports === 'undefined' ? this['wordy']={} : exports);