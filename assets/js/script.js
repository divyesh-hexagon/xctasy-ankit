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

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 0,
  slidesPerGroup: 1,
  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    100: {
      slidesPerView: 1,
      spaceBetween: 20
    },
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

     