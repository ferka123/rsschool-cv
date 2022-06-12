const body = document.getElementById("body");
const themeBtn = document.getElementById("themeBtn");
const burgerToggle = document.getElementById("burger-toggle");
let lightTheme = false;

function toggleTheme() {
  if (lightTheme) {
    lightTheme = false;
    body.classList.remove("light-theme");
  } else {
    lightTheme = true;
    body.classList.add("light-theme");
  }
}

function closeMenu() {
  if (burgerToggle.checked) {
    burgerToggle.checked = false;
  }
}

themeBtn.addEventListener("click", toggleTheme);
document
  .querySelectorAll(".menu-link")
  .forEach((item) => item.addEventListener("click", closeMenu));
