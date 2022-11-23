(function ($) {
  $('.home-content').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 7000,
    autoplayHoverPause: false,
    animateOut: 'fadeOut',
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
})(jQuery);