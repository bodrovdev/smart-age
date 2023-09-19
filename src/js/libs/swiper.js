import Swiper from 'swiper/bundle';

let shop_slider = new Swiper(".shop__reviews-slider", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 10,

  navigation: {
    nextEl: '.shop__reviews-slider-arrow--next',
    prevEl: '.shop__reviews-slider-arrow--prev',
  },
});

let results_slider = new Swiper(".procedure__results-slider", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 6,

  navigation: {
    nextEl: '.results-slider-nav-arrow--next',
    prevEl: '.results-slider-nav-arrow--prev',
  },
});

let recommend_slider = new Swiper(".procedure__recommended-slider", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 120,

  navigation: {
    nextEl: '.procedure__recommended-nav-arrow--next',
    prevEl: '.procedure__recommended-nav-arrow--prev',
  },
});