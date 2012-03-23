var w;
var listReq = $.ajax('lists/enable2k.txt');
listReq.done(function(data) {
	var words = data.split('\n');
	// clean up trailing empty elements
	while (words[words.length-1] == '') {
		words.pop();
	}
	w = wordy.create(words);
});

/**
 * Update the display based on the current filters
 */
function update() {
	$('#result').html(w.anagrams(filters.filter0.value).sort().join(','));
}