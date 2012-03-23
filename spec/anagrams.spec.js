var Wordy = require('..');

describe('anagrams', function() {
	/**
	 * Test the ability to find words which are anagrams of the supplied word
	 */
	it('anagrams', function() {
		var wordy = Wordy.create([
			'bar', 'bat', 'ball', 'tab', 'samba'
		]);
		expect(
			wordy.anagrams('abt').sort()
		).toEqual(
			['bat', 'tab']
		);
		expect(
			wordy.anagrams('ab').sort()
		).toEqual(
			[]
		);
		
		wordy = Wordy.create([
			'all', 'ball', 'pinball'
		]);
		expect(
			wordy.anagrams('abll').sort()
		).toEqual(
			['all', 'ball']
		);
	});
	
	/**
	 * Test the ability to find words which are anagrams of the supplied word + optional blanks
	 */
	it('anagram blanks', function() {
		var wordy = Wordy.create([
			'bar', 'bat', 'ball', 'tab', 'samba'
		]);
		// one blank
		expect(
			wordy.anagrams('ab?').sort()
		).toEqual(
			['bar', 'bat', 'tab']
		);
		// two blanks
		expect(
			wordy.anagrams('ab??').sort()
		).toEqual(
			['ball', 'bar', 'bat', 'tab']
		);
		
		// only blanks
		expect(
			wordy.anagrams('???').sort()
		).toEqual(
			['bar', 'bat', 'tab']
		);
		expect(
			wordy.anagrams('????').sort()
		).toEqual(
			['ball', 'bar', 'bat', 'tab']
		);
	});
});