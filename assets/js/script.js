(function ($) {
  var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    speed: 2000,
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
})(jQuery);   