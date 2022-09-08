import * as noUiSlider from "nouislider";

export function catalogNouislider() {
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

    const input0 = document.getElementById("input-0");
    const input1 = document.getElementById("input-1");
    const inputs = [input0, input1];

    catalogNoUISlider.noUiSlider.on("update", function (values, handle) {
      inputs[handle].value = Math.round(values[handle]);
    });

    const setCatalogSlider = (i, value) => {
      let arr = [null, null];
      arr[i] = value;

      catalogNoUISlider.noUiSlider.set(arr);
    };

    inputs.forEach((el, index) => {
      el.addEventListener("change", (e) => {
        setCatalogSlider(index, e.currentTarget.value);
      });
    });
  }

}
