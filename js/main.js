// import * as flsFunctions from "./modules/functions.js";

// flsFunctions.isWebp();

// $(".menu__btn").on("click", function () {
//   $(".nav").addClass("menu-shown");
// });

// $(".close-btn-mobile").on("click", function () {
//   $(".nav").removeClass("menu-shown");
// });
$(document).ready(function () {
  $(".ua").click(function (event) {
    $(".eng").toggleClass("eng-shown");
  });
});

$(document).ready(function () {
  $(".footer-ua").click(function (event) {
    $(".eng").toggleClass("eng-shown");
  });
});

$(document).ready(function () {
  $(".menu-btn").click(function (event) {
    $(".menu__mobile").addClass("menu__mobile-shown");
  });
});

$(document).ready(function () {
  $(".close-btn-mobile").click(function (event) {
    $(".menu__mobile").removeClass("menu__mobile-shown");
  });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var acc = document.getElementsByClassName("header-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
