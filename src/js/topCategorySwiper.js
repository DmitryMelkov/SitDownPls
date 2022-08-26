import Swiper, { Navigation, Pagination } from "swiper";

export function topCategorySwiper() {
  // init Swiper:
  const topCategorySwiper = new Swiper(".top-category__swiper", {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: ".top-category__button-next",
      prevEl: ".top-category__button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      600: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      769: {
        slidesPerView: 3,
        slidesPerGroup: 2,
        spaceBetween: 32,
      },
      1025: {
        spaceBetween: 32,
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
    },
  });

}