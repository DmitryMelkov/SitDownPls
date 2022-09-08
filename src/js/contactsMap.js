// import * as ymaps from "ymaps";
const menuInfo = document.querySelector(".contacts-tab__content");
const contactsInfo = gsap.timeline({ paused: true });
contactsInfo
  .fromTo(menuInfo, { display: "none" }, { display: "block" })
  .fromTo(menuInfo, { opacity: "0" }, { opacity: "1" });

const btnClose = document.querySelector(".contacts-tab__map-btn");

export function contactsMap() {
  ymaps.ready(init);
  function init() {
    let center = [55.754044, 37.642426];
    let myMap = new ymaps.Map("map", {
      center: center,
      zoom: 15,
    });
    let placeMarkCustom = new ymaps.Placemark(
      [55.750616,
      37.641809],
      {
        balloonContent: "",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "../img/marker.svg",
        iconImageSize: [32, 22],
        iconImageOffset: [0, 0],
        iconContentOffset: [50, 50],
      }
    );

    // myMap.controls.remove("typeSelector");
    myMap.geoObjects.add(placeMarkCustom);
    placeMarkCustom.events.add("click", function () {
      contactsInfo.play();
    });
    btnClose.addEventListener("click", () => {
      placeMarkCustom.balloon.close();
      contactsInfo.reverse();
    });
  }
}
