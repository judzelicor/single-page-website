const menuToggler = document.querySelector(".menu-toggler");
const globalMenu = document.querySelector(".navbar");

loadEventListeners();

function loadEventListeners() {
  menuToggler.addEventListener("mouseup", toggleMenu);
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      globalMenu.style.transition = "none";
    }
  });
}

let menuIsVisible = false;
function toggleMenu() {
  if (menuIsVisible) {
    globalMenu.classList.remove("menu-active");
  } else {
    globalMenu.style.transition = "800ms cubic-bezier(.17,.67,.62,1.12)";
    globalMenu.classList.add("menu-active");
  }
  menuIsVisible = !menuIsVisible;
}
