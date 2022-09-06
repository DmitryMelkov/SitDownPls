import * as noUiSlider from "nouislider";

export function catalogNouislider() {
  console.log("nouislider");

  const catalogNoUISlider = document.getElementById("catalog-nouislider");
  if (catalogNoUISlider) {
    noUiSlider.create(catalogNoUISlider, {
      start: [2000, 150000],
      connect: true,
      step: 1,
      range: {
        min: 2000,
        max: 150000,
      },
    });
  }
}
