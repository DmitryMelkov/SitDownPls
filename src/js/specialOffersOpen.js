export function specialOffersOpen() {
  function isHidden(el) {
    const style = window.getComputedStyle(el);
    return style.display === "none";
  }

  function setShowMore(showQuantity) {
    const btn = document.querySelector(".special-offers__btn-goods-click");
    if (btn) {
      btn.addEventListener("click", function () {
        const boxes = Array.from(document.querySelectorAll(".special-offers__rating-item"));
        const hiddenIndex = boxes.findIndex((box) => isHidden(box));

        for (let k = hiddenIndex; k <= hiddenIndex + showQuantity; k++) {
          if (boxes[k]) {
            boxes[k].style.display = "flex";
          } else {
            btn.style.display = "none";
            break;
          }
        }
      });
    }
  }

  setShowMore(4);
}
