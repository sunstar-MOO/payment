const burger = document.querySelector(".burger");
const menus = document.querySelector(".menus");
const ewallet = document.querySelector(".ewallet");
const qris = document.querySelector(".qris");
const bri = document.querySelector(".bri");
const bca = document.querySelector(".bca");

burger.addEventListener("click", function () {
  if (menus.classList.contains("move")) {
    menus.classList.remove("move");
    burger.classList.add("bi-list");
    burger.classList.remove("bi-arrow-left");
  } else {
    menus.classList.add("move");
    burger.classList.remove("bi-list");
    burger.classList.add("bi-arrow-left");
  }
});

ewallet.addEventListener("click", function () {
  qris.classList.add("open");
  qris.classList.remove("close");
});

qris.addEventListener("click", function () {
  qris.classList.remove("open");
  qris.classList.add("close");
});

bri.addEventListener("click", function () {
  navigator.clipboard.writeText("011801022811509");
  window.alert("TEXT COPIED :)");
});
bca.addEventListener("click", function () {
  navigator.clipboard.writeText("6019005232532577");
  window.alert("TEXT COPIED :)");
});
