// for navbar
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("opacity-0");
  mobileMenu.classList.toggle("z-50");
  mobileMenu.classList.toggle("opacity-100");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  menuToggle.classList.toggle("rotate-180");
});