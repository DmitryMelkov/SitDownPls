import Swiper, { Navigation, Pagination } from "swiper";

export function specialOffersSwiper() {
  // init Swiper:
  const specialOffersSwiper = new Swiper(".special-offers__slider", {
    modules: [Navigation, Pagination],
    slidesPerView: "auto",
    navigation: {
      nextEl: ".special-offers__button-next",
      prevEl: ".special-offers__button-prev",
    },
    breakpoints: {
      320: {
        slidesPerGroup: 1,
      },
      718: {
        slidesPerGroup: 2,
        spaceBetween: 32,
      },
      1024: {
        slidesPerGroup: 3,
        spaceBetween: 32,
      },
    },
  });
}
