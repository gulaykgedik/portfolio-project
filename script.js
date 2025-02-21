let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
const themeMoon = document.querySelector(".bxs-moon");
const themeSun = document.querySelector(".bxs-sun");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

themeMoon.addEventListener("click", () => {
  themeMoon.classList.remove("active");
  themeSun.classList.add("active");
  document.body.classList.remove("active");
});

themeSun.addEventListener("click", () => {
  themeSun.classList.remove("active");
  themeMoon.classList.add("active");
  document.body.classList.add("active");
});
