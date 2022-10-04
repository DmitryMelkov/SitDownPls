import Swiper, { Navigation, Pagination, Grid } from 'swiper';

export function catalogSwiper() {
  
  const catalogSwiper = new Swiper('.catalog__slider', {
    modules: [Navigation, Pagination, Grid],

    pagination: {
      el: '.catalog__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
    scrollbar: {
      el: '.catalog__scrollbar',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 16,
        grid: {
          rows: 3,
          fill: 'row',
        },
      },
      769: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 32,
        grid: {
          rows: 3,
          fill: 'row',
        },
      },
    },

    // https://codepen.io/andreacazzola90/pen/ZEBBXqm
  });
}
