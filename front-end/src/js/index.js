import "../styles/index.css";
import "../styles/main_page.css";
import "./particles.min.js";
import "./landing_particles";
import ScrollReveal from "scrollreveal";

// scroll reveal
ScrollReveal().reveal("#educatie", {
    distance: "150px",
    origin: "left",
    reset: true,
});
ScrollReveal().reveal("#tabelas", {
    distance: "150px",
    origin: "right",
    reset: true,
});
ScrollReveal().reveal("#medicina", {
    delay: 200,
    distance: "150px",
    origin: "left",
    reset: true,
});
ScrollReveal().reveal("#arta", {
    delay: 200,
    distance: "150px",
    origin: "right",
    reset: true,
});
ScrollReveal().reveal("#title", {
    distance: "50px",
    origin: "bottom",
});
ScrollReveal().reveal("#additional", {
    delay: 150,
    distance: "50px",
    origin: "bottom",
});
ScrollReveal().reveal("#ai_intro", {
    distance: "50px",
    origin: "bottom",
});
ScrollReveal().reveal("#information_1", {
    distance: "50px",
    origin: "bottom",
});
ScrollReveal().reveal("#information_2", {
    delay: 50,
    distance: "50px",
    origin: "bottom",
});
ScrollReveal().reveal("#information_3", {
    delay: 100,
    distance: "50px",
    origin: "bottom",
});
ScrollReveal().reveal("#information_4", {
    delay: 150,
    distance: "50px",
    origin: "bottom",
});
ScrollReveal().reveal("#information_5", {
    delay: 200,
    distance: "50px",
    origin: "bottom",
});
ScrollReveal().reveal("#information_6", {
    delay: 250,
    distance: "50px",
    origin: "bottom",
});

//prima sectiune -> drop down menu (mi se prajeste calculatorul lol nu mi mai merge os ul)
const menu = document.querySelector("#dropdown_menu");
const dropdownList = document.querySelector("#dropdown_list");
const body = document.querySelector("body");
const menuSvg = document.querySelector(".ham");

addEventListener("resize", () => {
    if (window.screen.width >= 768 && menu.classList.contains("is_active")) {
        menu.classList.remove("is_active");
        menuSvg.classList.remove("active");
        body.classList.remove("h-screen", "overflow-hidden");
        dropdownList.classList.add("hidden");
    }
    4;
});
menu.addEventListener("click", () => {
    if (!menu.classList.contains("is_active")) {
        menu.classList.add("is_active");
        menuSvg.classList.add("active");
        body.classList.add("h-screen", "overflow-hidden");
        dropdownList.classList.remove("hidden");
    } else {
        menu.classList.remove("is_active");
        menuSvg.classList.remove("active");
        body.classList.remove("h-screen", "overflow-hidden");
        dropdownList.classList.add("hidden");
    }
});
//a doua sectiune

// a treia sectiune
