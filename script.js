const header = document.querySelector(".header");
const toggle = document.querySelector(".nav__mobile-toggle");
const menu = document.querySelector(".nav__menu");

toggle.addEventListener("click", () => {
  // Toggle the open state on the button
  toggle.classList.toggle("nav__mobile-toggle--open");

  // Toggle the menu visibility
  menu.classList.toggle("nav__menu--open");
});

document.addEventListener("DOMContentLoaded", () => {
  const currentLocation = location.href;
  const menuItems = document.querySelectorAll(".nav__link");

  menuItems.forEach((item) => {
    if (item.href === currentLocation) {
      item.classList.add("active");
    }
  });
});
