// JavaScript Document (jQuery)

$(document).ready(function(e) {
    
	$('#links').mousedown(function(){
		$('.menu-overlay').fadeIn();
	});
	
	$('#menu-close').mousedown(function(){
		$('.menu-overlay').hide();
	});
	
});