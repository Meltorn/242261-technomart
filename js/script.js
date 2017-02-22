// Напишите нам
if (document.querySelector('.write-us') !== null) {
  var link = document.querySelector(".mail-button");
  var popup = document.querySelector(".write-us");
  var close = popup.querySelector(".write-us-userdata a");
  link.addEventListener("click", function (event) {
    event.preventDefault();
    popup
      .classList
      .add("write-content-show");
  });
  close.addEventListener("click", function (event) {
    event.preventDefault();
    popup
      .classList
      .remove("write-content-show");
  });
  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("write-content-show")) {
        popup
          .classList
          .remove("write-content-show");
      }
    }
  });
}
//Карта
if (document.querySelector('.map-popup') !== null) {
  var mapLink = document.querySelector(".js-open-map");
  var mapPopup = document.querySelector(".map-popup");
  var mapClose = document.querySelector(".map-popup a");
  mapLink.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup
      .classList
      .add("map-content-show");
  });
  mapClose.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup
      .classList
      .remove("map-content-show");
  });
  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (mapPopup.classList.contains("map-content-show")) {
        mapPopup
          .classList
          .remove("map-content-show");
      }
    }
  });
}
//Товар добавлен
if (document.querySelector('.buy') !== null) {
  var addlink = document.querySelector(".buy");
  var addpopup = document.querySelector(".product-add");
  var addclose = document.querySelector(".product-add-close");
  addlink.addEventListener("click", function (event) {
    event.preventDefault();
    addpopup
      .classList
      .add("product-content-show");
  });
  addclose.addEventListener("click", function (event) {
    event.preventDefault();
    addpopup
      .classList
      .remove("product-content-show");
  });
  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (addpopup.classList.contains("product-content-show")) {
        addpopup
          .classList
          .remove("product-content-show");
      }
    }
  });
}
