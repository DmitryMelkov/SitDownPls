// import Swiper JS
import Swiper, { Navigation, Pagination } from "swiper";

export function introSwiper() {
  // init Swiper:
  const introSwiper = new Swiper(".intro__swiper", {
    modules: [Navigation, Pagination],
    loop: true,

    pagination: {
      el: ".intro__pagination",
      //буллеты
      clickable: true,
    },
  });
}
