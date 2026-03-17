const header = document.querySelector(".header__main");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
  header.classList.toggle("menu-open");
});

document.addEventListener("DOMContentLoaded", () => {
  const currentLocation = location.href;
  const menuItems = document.querySelectorAll(".header__navbar-link");

  menuItems.forEach((item) => {
    if (item.href === currentLocation) {
      item.classList.add("active");
    }
  });
});
