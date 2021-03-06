(function(exports){
	/**
	 * Raw list of words we are searching over
	 */
	var words = [];

	/**
	 * Instantiate a wordy object
	 */
	var create = function(words) {
		// if we get a string, assume it's newline separated
		if (typeof(words) == 'string') {
			words = words.split('\n');
			// clean up trailing empty elements
			while (words[words.length-1] == '') {
				words.pop();
			}
		}
		
		return new Wordy(words);
	};
	exports.create = create;
	
	function Wordy(words) {
		this.words = words;
		this.anagrams = anagrams;
		this.contains = contains;
		this.lengths = lengths;
		this.pattern = pattern;
		// array emulation
		this.sort = function() {
			return this.words.sort();
		}
	}
	exports.Wordy = Wordy;
	
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
		
		return create(matches);
	};
	
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
		
		return create(matches);
	};

	/**
	 * Should only be called by anagrams()
	 */
	var anagramLetterMatch = function(word, letters, blanks) {
		for (var c in word) {
			var char = word[c];
			var i = letters.indexOf(char);
			if (i == -1) {
				if (blanks > 0) {
					blanks--;
				} else {
					return false;
				}
			} else {
				// remove matched letter from letters
				letters = letters.slice(0, i) + letters.slice(i+1);
			}
		}
		return true;
	};

	/**
	 * Return all words within the given lengths inclusive
	 */
	var lengths = function(min, max) {
		var matches = [];
		for (var w in this.words) {
			var word = this.words[w];
			if (word.length >= min && word.length <= max)
				matches.push(word)
		}

		return create(matches);
	};

	/**
	 * Return all words matching a supplied pattern
	 */
	var pattern = function(pattern) {
		var matches = [];
		for (var w in this.words) {
			var word = this.words[w];
			if (word.match(pattern))
				matches.push(word)
		}

		return create(matches);
	};
})(typeof exports === 'undefined' ? this['wordy']={} : exports);