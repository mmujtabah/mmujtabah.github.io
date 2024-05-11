(function ($) {

  "use strict";

  // COLOR MODE SWITCH
  $('.theme-switch__checkbox').change(function () {
    if (this.checked) {
      // Enable dark mode
      $('body').addClass('dark-mode');
    } else {
      // Disable dark mode
      $('body').removeClass('dark-mode');
    }
  });

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true
  });

  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

  // TOOLTIP
  $('.social-links a').tooltip();

})(jQuery);
