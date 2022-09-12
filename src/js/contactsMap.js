export function contactsMap() {
  ymaps.ready(init);
  function init() {
    let center = [55.754044, 37.642426];
    let myMap = new ymaps.Map("map", {
      center: center,
      zoom: 15,
    });
    let placeMarkCustom = new ymaps.Placemark(
      [55.750616, 37.641809],
      {
        balloonContentHeader:
          '<h4 class="contacts-tab__header title-reset">SitDownPls на Солянке</h4>' +
          '<address class="contacts-tab__adress">ул. Солянка, д.16</address>' +
          `<a class="header__number" href="tel:+7 (495) 885-45-47">
                <svg class="header__number-phone">
                  <use xlink:href="img/icons/icons.svg#phone"></use>
                </svg>
                +7 (495) 885-45-47
              </a>`,
        balloonContentBody: `<div class="contacts-tab__info contacts-tab__info-bf">
                Часы работы:
                <span class="contacts-tab__text">с 10:00 до 21:00</span>
              </div>`,

        balloonContentFooter: `<div class="contacts-tab__info">
                Что здесь:
                <span class="contacts-tab__text"
                  >шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр
                </span>
              </div>`,
        hintContent: "SitDownPls",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "../img/marker.svg",
        iconImageSize: [32, 22],
        iconImageOffset: [0, 0],
        iconContentOffset: [50, 50],
      }
    );

    myMap.geoObjects.add(placeMarkCustom);
    placemark.balloon.open();
  }
}
