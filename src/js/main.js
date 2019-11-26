(function($) {

timeago().render(document.querySelectorAll('.relativetime'));
timeago.cancel();

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
tabs_fixed_height();

// make anchor links in .markdown sections lowercase
function github_markdown_anchors(){
	$('.markdown a[href^="#"]').each(function(){
		$(this).attr('href', $(this).attr('href').toLowerCase());
	});
}
github_markdown_anchors();

$(window).on('load', function(){
	tabs_fixed_height();
});

$(window).on('resize', function(){
	tabs_fixed_height();
});


} (jQuery));