# About

Wordy is here to help you find that word you're after.

Read on for examples...

# Getting started

Wordy is a Node.JS program, so you'll want to have that working first.

The best way to use Wordy is currently by launching the shell:

      $ ./wordysh.js 
      wordy> 

Once you've done that you can do things like ask for anagrams of a word:

      wordy> wordy.anagrams('bat').words
      [ 'ab',
        'at',
		'ba',
		'bat',
		'ta',
		'tab' ]

Queries are stackable:

	wordy> wordy.anagrams('bat').pattern(/ba/).words
	[ 'ba', 'bat' ]

The shell tab completes, so just start playing.

# Queries

## Anagrams

The anagrams(word) filter will return only anagrams of the supplied word in the word list, or a subset of the letters within the supplied word, i.e. "ta" is returned for "bat".

Blank (or unknown) letters can be represented with question marks "?", e.g.:

      wordy> wordy.anagrams('x?').words
      [ 'ax',
        'ex',
		'ox',
		'xi',	
		'xu' ]

## Contains

The contains(letters) filter will return only words in the word list that contain all of the provided letters:

	wordy> wordy.contains('xzlch').words
	[ 'chlordiazepoxide', 'chlordiazepoxides' ]

## Lengths

The lengths(min, max) filter will return only words between the min and max lengths (inclusive).

E.g.:

	wordy> wordy.lengths(28,28).words
	[ 'ethylenediaminetetraacetates' ]

## Pattern

The pattern(re) filter will return words in the word list matching the supplied Regular Expression:

	wordy> wordy.pattern(/^..z$/).words
	[ 'adz',
	  'biz',
	  'coz',
	  'fez',
	  'fiz',
	  'lez',
	  'wiz' ]

# Dictionary

Currently I'm just using the enable2k dictionary as it is meant to be copyright free.

# Future Stuff

I'm intending to add browser support at some point, but that hasn't happened yet.
