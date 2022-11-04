const iconMenu = document.querySelector(".bx-menu");
const menu = document.querySelector(".menuNav");

iconMenu.addEventListener("click", function () {
    iconMenu.classList.toggle("bx-x");
    menu.classList.toggle("menuNav_show");
});

const cerrar = document.querySelectorAll('.menuNav a[href^="#"]');

cerrar.forEach((cerrar) => {
    cerrar.addEventListener("click", function () {
        iconMenu.classList.remove("bx-x");
        menu.classList.remove("menuNav_show");
    });
});
