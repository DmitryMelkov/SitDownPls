import Swiper, { Navigation, Pagination } from "swiper";

export function specialOffersSwiper() {
  // init Swiper:
  const specialOffersSwiper = new Swiper(".special-offers__slider", {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: ".special-offers__button-next",
      prevEl: ".special-offers__button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      718: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  });
}
