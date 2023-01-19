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
