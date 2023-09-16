const links = document.querySelectorAll("#sidebar-links a");
const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
links.forEach(function (link) {
  link.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
  });
});
// set year
date.innerHTML = new Date().getFullYear();
