import Swiper, { FreeMode, Navigation, Thumbs } from "swiper";

export function cardsProductsGoodsSwiper() {
  const swiper = new Swiper(".cards-products__swiper-1", {
    modules: [FreeMode, Navigation, Thumbs ],
    loop: true,
    spaceBetween: 38,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const swiper2 = new Swiper(".cards-products__swiper-2", {
    modules: [FreeMode, Navigation, Thumbs ],
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
}