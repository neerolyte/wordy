var w;
var listReq = $.ajax('lists/enable2k.txt');
listReq.done(function(data) {
	w = wordy.create(data);
});

/**
 * Update the results div based on the current filters
 */
function update() {
	var filters = $('.filters .filter');

	var res = w;
	// loop over ze filters!
	for (var i = 0; i < filters.length; i++) {
		var filter = filters[i];
	
		var str = $(filter).find('.string')[0].value;
		var type = $(filter).find('.type')[0].value;

		// bail if str is not set
		if (str == '') {
			// if we're still on the first entry avoid rendering alltogether
			if (i == 0)
				return;
			else
				break;
		}

		res = res[type](str);
	}

	res = res.sort();
	
	$('#result').html(res.join(', '));
	$('#resultcount').html(res.length);

	expand();
}

/**
 * Checks whether we should expand the filters area
 * because all the current ones may be in use
 */
function expand() {
	var filters = $('.filters li.filter');
	var lastFilter = filters[filters.length - 1];

	var lastFilterStr = $(lastFilter).find('.string')[0].value;
	if (lastFilterStr != '') {
		console.log("would expand");
		var newFilter = $(lastFilter).clone(true)

		// reset input
		newFilter.find('input.string')[0].value = '';
		
		newFilter.appendTo('.filters ul');
	}
}

$(document).ready(function() {
	// focus on top input at page load
	$(".filters .filter .string")[0].focus();
});