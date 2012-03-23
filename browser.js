var w;
var listReq = $.ajax('lists/enable2k.txt');
listReq.done(function(data) {
	w = wordy.create(data);
});

/**
 * Update the display based on the current filters
 */
function update() {
	var filters = $('.filters .filter');

	var filter = filters[0];
	
	var str = $(filter).find('.string')[0].value;
	var type = $(filter).find('.type')[0].value;
	
	$('#result').html(w[type](str).sort().join(','));
}


$(document).ready(function() {
	// focus on top input at page load
	$(".filters .filter .string")[0].focus();
});