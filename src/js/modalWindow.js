import Swiper, { FreeMode, Navigation, Thumbs } from 'swiper';

export function modalWindow() {
  const modal = document.querySelector('.modal-js');
  const close = document.querySelector('.modal__close-js');
  const buyGoods = document.querySelector('.cards-products__btn-buy-js');

  const modalCards = document.querySelector('.cards-modal-js');
  const closeCards = document.querySelector('.cards-modal__close-js');
  const cards = document.querySelector('.cards-products__swiper-2-js');

  let modalOpen = () => {
    modal.classList.add('open');
  };

  let modalClose = () => {
    modal.classList.remove('open');
  };

  let modalOpenCards = () => {
    modalCards.classList.add('open');
  };

  let modalCloseCards = () => {
    modalCards.classList.remove('open');
  };

  let aroundModalWindow = (e) => {
    if (e.target == modal || e.target == modalCards) {
      modal.classList.remove('open');
      modalCards.classList.remove('open');
    }
  };

  if ((buyGoods, close, cards, closeCards)) {
    buyGoods.addEventListener('click', modalOpen);
    close.addEventListener('click', modalClose);

    cards.addEventListener('click', modalOpenCards);
    closeCards.addEventListener('click', modalCloseCards);
  }

  window.addEventListener('click', aroundModalWindow);

  const swiper = new Swiper('.cards-products__swiper-3', {
    modules: [FreeMode, Navigation, Thumbs],
    loop: true,
    spaceBetween: 38,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const swiper2 = new Swiper('.cards-products__swiper-4', {
    modules: [FreeMode, Navigation, Thumbs],
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: swiper,
    },
  });
}
