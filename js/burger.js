export function burger() {
  const burgerOpen = document.querySelector(".burger-open-js");
  const burgerClose = document.querySelector(".burger-close-js");

  let burgerTl = gsap.timeline({ paused: true });

  burgerTl
    // .set(".header__burger-menu-js", { clearProps: "all" })
    // .set(".header__two-list-item-js", { clearProps: "all" })
    // .set(".burger-img-js", { clearProps: "all" })
    .fromTo(
      ".header__burger-menu-js",
      {
        display: "none",
        opacity: 0,
      },
      {
        display: "flex",
        opacity: 1,
        duration: 0.1,
      }
    )
    .from(".header__two-list-js", {
      opacity: 0,
      y: "100px",
    })
    .from(".burger-img-js", {
      opacity: 0,
      y: "100px",
    })
    .from(".header__right-js", {
      opacity: 0,
      y: "100px",
    });

  burgerOpen.addEventListener("click", () => {
    burgerTl.play();
  });

  burgerClose.addEventListener("click", () => {
    burgerTl.reverse();
  });
}
