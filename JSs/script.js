// const menuIcon = document.getElementById("menuIcon");
// const nav = document.getElementById("nav");

// menuIcon.addEventListener("click", () => {
//   nav.classList.toggle("active");
// });

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const overlayMenu = document.getElementById("overlayMenu");

openMenu.addEventListener("click", () => {
  overlayMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  overlayMenu.classList.remove("active");
});
