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

	// code that makes the product grid activate!
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		$("#product-tabs").removeClass("flex-column");
		$("#product-tabs").addClass("nav-tabs");		
		$(".product-grid-copy-wrapper").css("transform", "translate(0,0)");
		$(".stack-background").css("stroke", "#3c3c3c");
		$(".stack-link").css("stroke", "#3c3c3c");
		$("#infra-connector").css("opacity", 0);			
		$("#inspec-connector").css("opacity", 0);			
		$("#habitat-connector").css("opacity", 0);			
		$("#automate-connector").css("opacity", 0);		
		$("#automate-bubble").css("transform", "translate(0px)");
		$("#infra-bubble").css("transform", "translate(0px)");
		$("#inspec-bubble").css("transform", "translate(0px)");
		$("#habitat-bubble").css("transform", "translate(0px)");

		if (e.currentTarget.hash === "#infra") {
			$(".automate-stroke").css("stroke", "#3c3c3c");
			$(".inspec-stroke").css("stroke", "#3c3c3c");
			$(".habitat-stroke").css("stroke", "#3c3c3c");			
			$(".infra-stroke").css("stroke", "#DA1884");
			$("#infra-connector").css("opacity", 1);
			$("#infra-bubble").css("transform", "translate(275px)");		
	
		} else if (e.currentTarget.hash === "#automate") {
			$(".automate-stroke").css("stroke", "#00aeef");
			$(".inspec-stroke").css("stroke", "#3c3c3c");
			$(".habitat-stroke").css("stroke", "#3c3c3c");			
			$(".infra-stroke").css("stroke", "#3c3c3c");		
			$("#automate-connector").css("opacity", 1);						
			$("#automate-bubble").css("transform", "translate(275px)");
		} else if (e.currentTarget.hash === "#inspec") {
			$(".automate-stroke").css("stroke", "#3c3c3c");
			$(".inspec-stroke").css("stroke", "#9957a3");
			$(".habitat-stroke").css("stroke", "#3c3c3c");			
			$(".infra-stroke").css("stroke", "#3c3c3c");	
			$("#inspec-connector").css("opacity", 1);	
			$("#inspec-bubble").css("transform", "translate(275px)");
					
		} else if (e.currentTarget.hash === "#habitat") {
			$(".automate-stroke").css("stroke", "#3c3c3c");
			$(".inspec-stroke").css("stroke", "#3c3c3c");
			$(".habitat-stroke").css("stroke", "#1aaf94");			
			$(".infra-stroke").css("stroke", "#3c3c3c");					
			$("#habitat-connector").css("opacity", 1);
			$("#habitat-bubble").css("transform", "translate(275px)");			
		};
	  })

} (jQuery));