// ==== NAVBAR MOBILE MENU ====
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const menu = document.querySelector(".mobile-menu");
  const lines = document.querySelectorAll(".hamburger-line");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("active");
      menuBtn.classList.toggle("active");
      document.body.classList.toggle("no-scroll");
    });
  }
});
