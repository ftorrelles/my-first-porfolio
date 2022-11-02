const iconMenu = document.querySelector(".menu_ham");
const menu = document.querySelector(".menuNav");

iconMenu.addEventListener("click", function () {
    menu.classList.toggle("menuNav_show");
});
