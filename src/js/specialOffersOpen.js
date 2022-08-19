export function specialOffersOpen() {
  // const btn = document.querySelector(".special-offers__btn-goods-click");
  // const container = document.querySelector(".special-offers__rating-container");

  // btn.addEventListener("click", function () {
  //   container.classList.add("special-offers__rating-container-open");
  //   btn.style.display = "none";
  // });



  function isHidden(el) {
    const style = window.getComputedStyle(el);
    return style.display === "none";
  }

  function setShowMore(showQuantity) {
    const btn = document.querySelector(".special-offers__btn-goods-click");

    btn.addEventListener("click", function () {
      const boxes = Array.from(document.querySelectorAll(".special-offers__rating-item"));
      const hiddenIndex = boxes.findIndex((box) => isHidden(box));

      for (let k = hiddenIndex; k <= hiddenIndex + showQuantity; k++) {
        if (boxes[k]) {
          boxes[k].style.display = "block";
        } else {
          btn.style.display = "none";
          break;
        }
      }
    });
  }

  setShowMore(4);
}
