// import 'js.js';

(function($) {

$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
	
	var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	
	if (windowWidth < 768) {
		if (!$(this).next().hasClass('show')) {
			$(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
		}
		var $subMenu = $(this).next('.dropdown-menu');
		$subMenu.toggleClass('show');
	  
	  
		$(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
		  $('.dropdown-submenu .show').removeClass('show');
		});
	  
	  
		return false;
	}
  
});

// set fixed height on tabs
function tabs_fixed_height() {
	$('.tab-content').each(function(){
		var tabs = $(this);
		var h = 0;
		tabs.find('.tab-pane').each(function(){
			var paneHeight = $(this).height();
			if (paneHeight > h) {
				h = paneHeight;
			}
		});
		tabs.height(h);
	});
}

$(window).on('load', function(){
	tabs_fixed_height();
});

$(window).on('resize', function(){
	tabs_fixed_height();
});


} (jQuery));