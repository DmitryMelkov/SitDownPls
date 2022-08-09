export function specialOffersOpen() {
  const btn = document.querySelector(".special-offers__btn-goods-click");
  const container = document.querySelector(".special-offers__rating-container");

  btn.addEventListener("click", function () {
    container.classList.add("special-offers__rating-container-open");
    btn.style.display = "none";
  });
}
