const swiperSliderPortfolio = new Swiper(".portfolio-swiper-container", {
  // Optional parameters
  loop: false,
  spaceBetween: 30,
  slidesPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: ".portfolio-slider-button-next",
    prevEl: ".portfolio-slider-button-prev",
  },
});

const swiperSliderFeedback = new Swiper(".feedback-swiper-container", {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  slidesPerView: 2,

  // Navigation arrows
  navigation: {
    nextEl: ".feedback-slider-button-next",
  },
});
