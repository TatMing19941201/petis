$(document).ready(function () {
    // Show or hide the button based on the scroll position
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#scroll-to-top').fadeIn();
      } else {
        $('#scroll-to-top').fadeOut();
      }
    });

    // Scroll to top when the button is clicked
    $('#scroll-to-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
  });