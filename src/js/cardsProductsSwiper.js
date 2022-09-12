import Swiper, { Navigation, Pagination } from "swiper";

export function cardsProductsSwiper() {
  const catalogSwiper = new Swiper(".cards-products__slider", {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: ".cards-products__btn-next",
      prevEl: ".cards-products__btn-prev",
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
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 32,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 32,
      },
    },
  });
}
