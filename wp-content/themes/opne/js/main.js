$(document).ready(function() {	
	// content page expand/collapse
	$('.col1-2 article:not(:first, .open) section').hide();
	$('.col1-2:not(.newsArchive, .searchResults) h2 a').click(function() {
		$(this).parent('h2').siblings('section').slideToggle('slow');
		return false;
	});
	
	// extended hidden content (about page)
	$('.evenMore').each(function() {
		$(this).css('display', 'block');
		var sibling = $(this).parent('p').siblings('div');
		sibling.find('.less').css('display', 'block');
		sibling.hide();
	});
	$('.evenMore').click(function() {
		$(this).hide();
		$(this).parent('p').siblings('div').show();
		return false;
	});
	$('.less').click(function() {
		$(this).closest('div').hide();
		$(this).closest('section').find('.evenMore').css('display', 'block');
		return false;
	});
});