(function ($) {

  "use strict";

  // Function to set the theme based on local storage
  function setThemeFromStorage() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      $('body').addClass('dark-mode');
      $('.theme-switch__checkbox').prop('checked', true);
    } else {
      $('body').removeClass('dark-mode');
      $('.theme-switch__checkbox').prop('checked', false);
    }
  }

  // Set theme on page load
  $(document).ready(function () {
    setThemeFromStorage();
  });

  // COLOR MODE SWITCH
  $('.theme-switch__checkbox').change(function () {
    if (this.checked) {
      // Enable dark mode
      $('body').addClass('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      // Disable dark mode
      $('body').removeClass('dark-mode');
      localStorage.setItem('theme', 'light');
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


function sendEmail() {
  const emailAddress = document.getElementById("email").value;
  Email.send({
    SecureToken: "f4c1546e-be42-4b75-8586-712604871cd5",
    To: 'mmujtabah1588@gmail.com',
    From: "mmujtabah1588@gmail.com",
    Subject: "Contact Form Inquiry",
    Body: "Name: " + document.getElementById("name").value
      + "<br> Email: " + emailAddress
      + "<br> Message: " + document.getElementById("message").value
  }).then(
    message => alert(`Message sent successfully`)
  ).catch(
    error => alert(`Error occurred while sending message: ${alert}`)
  );
}
