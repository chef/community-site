(function ($) {
  timeago().render(document.querySelectorAll(".relativetime"));
  timeago.cancel();

  // set fixed height on tabs
  function tabs_fixed_height() {
    $(".tab-content").each(function () {
      var tabs = $(this);
      var h = 0;
      tabs.find(".tab-pane").each(function () {
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
  function github_markdown_anchors() {
    $('.markdown a[href^="#"]').each(function () {
      $(this).attr("href", $(this).attr("href").toLowerCase());
    });
  }
  github_markdown_anchors();

  $(window).on("load", function () {
    tabs_fixed_height();
  });

  $(window).on("resize", function () {
    tabs_fixed_height();
  });

  // set Applications tab to active on small screens
  if (window.innerWidth <= 576) {
    $("#infra-nav").addClass("active");
    $("#infra").addClass("active");
    $("#infra").addClass("show");
  }

  //Appends absolute path to relative URLs (./link) in Github markdown files
  function github_url() {
    var baseURL = window.location.origin;
    if (
      location.href == baseURL + "/book-of-open-source/" ||
      location.href == baseURL + "/code-of-conduct/" ||
      window.location.hash
    ) {
      $('a[href^="./"]').each(function () {
        var oldURL = $(this).attr("href");
        var newURL = oldURL.replace(
          /(\.\/)*/,
          "https://github.com/chef/chef-oss-practices/blob/master/"
        );
        $(this).attr("href", newURL);
        // console.log($(this).attr("href"));
      });
    }
  }
  github_url();

  // code that makes the product grid activate!
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    $("#product-tabs").css("flex-direction", "row");
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
      console.log("INSPEC");
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
    } else if (e.currentTarget.hash === "#habitat-usage-one") {
      $(".studio").css("stroke", "#ffa300");
      $(".artifact").css("stroke", "#666666");
      $(".supervisor").css("stroke", "#666666");
      $("#define").css("opacity", "1");
      $("#studio-line").css("stroke", "#ffa300");
      $("#studio-line").css("stroke-width", "2");
      $("#deliver").css("opacity", "0");
      $("#package").css("opacity", "0");
    } else if (e.currentTarget.hash === "#habitat-usage-two") {
      $(".studio").css("stroke", "#666666");
      $(".artifact").css("stroke", "#ffa300");
      $(".supervisor").css("stroke", "#666666");
      $("#define").css("opacity", "0");
      $("#artifact-line").css("stroke", "#ffa300");
      $("#artifact-line").css("stroke-width", "2");
      $("#deliver").css("opacity", "0");
      $("#package").css("opacity", "1");
    } else if (e.currentTarget.hash === "#habitat-usage-three") {
      $(".studio").css("stroke", "#666666");
      $(".artifact").css("stroke", "#666666");
      $(".supervisor").css("stroke", "#ffa300");
      $("#define").css("opacity", "0");
      $("#package").css("opacity", "0");
      $("#deliver").css("opacity", "1");
      $("#supervisor-line").css("stroke", "#ffa300");
      $("#supervisor-line").css("stroke-width", "2");
    }
  });

  // Hide add-to-cal if tracking content disabled
  $(document).ready(function () {
    if (!window.addeventatc) {
      $(".addeventatc").hide();
    }
  });
})(jQuery);
