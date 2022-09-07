import Swiper, { Navigation, Pagination } from "swiper";

export function catalogSwiper() {
  const catalogSwiper = new Swiper(".catalog__slider", {
    modules: [Navigation, Pagination],
    grid: {
      rows: 3,
    },
    spaceBetween: 30,
    pagination: {
      el: ".catalog__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    scrollbar: {
      el: ".catalog__scrollbar",
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
    },
  });
}
