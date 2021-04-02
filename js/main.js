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

var menuButton = document.querySelector(".header-button");
menuButton.addEventListener("click", function () {
  console.log("Клик по кнопке");
  document.querySelector(".modal").classList.toggle("modal__visible");
});

var modalButton = $('[data-toggle="modal"]');
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass("modal__overlay--visible");
  modalDialog.addClass("modal__dialog--visible");
}

function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
}

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("Клик по кнопке");
  document
    .querySelector(".header-menu-d766")
    .classList.toggle("header-menu-visible");
});
