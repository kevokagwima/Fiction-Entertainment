const nav = document.querySelector(".header");
const burger = document.querySelector(".burger");
const close_sidenav = document.querySelector("#close");
const side_nav = document.querySelector(".side-nav");

window.addEventListener("scroll", () => {
  const scroll_height = window.pageYOffset;
  if (scroll_height > 10) {
    nav.classList.add("active-header");
  } else {
    nav.classList.remove("active-header");
  }
});

window.addEventListener("scroll", () => {
  side_nav.classList.remove("show-side-nav");
});

burger.addEventListener("click", () => {
  side_nav.classList.toggle("show-side-nav");
});

close_sidenav.addEventListener("click", () => {
  side_nav.classList.toggle("show-side-nav");
});

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("portfolio-item");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementByClassName("portfolio-menu");
var btns = btnContainer.getElementsByClassName("menu-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += "active";
  });
}
