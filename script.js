const header = document.querySelector(".header__main");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
  header.classList.toggle("menu-open");
});
