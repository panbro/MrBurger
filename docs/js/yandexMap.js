ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [59.93513803, 30.36608477],
    zoom: 12,
  });

  let myPlacemark1 = new ymaps.Placemark([59.896, 30.295], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/icons/map-marker.svg',
        iconImageSize: [95, 60]
      });
  let myPlacemark2 = new ymaps.Placemark([59.962, 30.293], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/icons/map-marker.svg',
        iconImageSize: [95, 60]
      });
  let myPlacemark3 = new ymaps.Placemark([59.952481, 30.36526], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/icons/map-marker.svg',
        iconImageSize: [95, 60]
      });
  let myPlacemark4 = new ymaps.Placemark([59.893539, 30.46659], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/icons/map-marker.svg',
        iconImageSize: [95, 60]
      });
  myMap.geoObjects.add(myPlacemark1);
  myMap.geoObjects.add(myPlacemark2);
  myMap.geoObjects.add(myPlacemark3);
  myMap.geoObjects.add(myPlacemark4);

  myMap.behaviors.disable('scrollZoom');
}