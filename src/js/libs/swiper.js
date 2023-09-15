import Swiper from 'swiper/bundle';

let shop_reviews = new Swiper(".shop__reviews-slider", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 10,

  navigation: {
    nextEl: '.shop__reviews-slider-arrow--next',
    prevEl: '.shop__reviews-slider-arrow--prev',
  },
});