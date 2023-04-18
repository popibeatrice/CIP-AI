import "../styles/index.css";
import "../styles/main_page.css";
import "./particles.min.js";
import "./landing_particles";
import ScrollReveal from "scrollreveal";

// scroll reveal
ScrollReveal().reveal("#robotel", {
    delay: 150,
    distance: "50px",
    origin: "left",
    reset: true,
});
ScrollReveal().reveal("#title", {
    distance: "50px",
    origin: "bottom",
    reset: true,
});
ScrollReveal().reveal("#additional", {
    delay: 150,
    distance: "50px",
    origin: "bottom",
    reset: true,
});
ScrollReveal().reveal("#ai_intro", {
    distance: "50px",
    origin: "bottom",
    reset: true,
});
ScrollReveal().reveal("#information_1", {
    distance: "50px",
    origin: "bottom",
    reset: true,
});
ScrollReveal().reveal("#information_2", {
    delay: 50,
    distance: "50px",
    origin: "bottom",
    reset: true,
});
ScrollReveal().reveal("#information_3", {
    delay: 100,
    distance: "50px",
    origin: "bottom",
    reset: true,
});
ScrollReveal().reveal("#information_4", {
    delay: 150,
    distance: "50px",
    origin: "bottom",
    reset: true,
});
ScrollReveal().reveal("#information_5", {
    delay: 200,
    distance: "50px",
    origin: "bottom",
    reset: true,
});
ScrollReveal().reveal("#information_6", {
    delay: 250,
    distance: "50px",
    origin: "bottom",
    reset: true,
});

//prima sectiune -> drop down menu (mi se prajeste calculatorul lol nu mi mai merge os ul)
const menu = document.querySelector("#dropdown_menu");
const dropdownList = document.querySelector("#dropdown_list");

if (
    window.screen.width >= 768 &&
    dropdownList.classList.contains(".is_active")
) {
    dropdownList.classList.remove(".is_active");
    dropdownList.classList.add("hidden");
}

menu.addEventListener("click", () => {
    if (!dropdownList.classList.contains(".is_active")) {
        dropdownList.classList.add(".is_active");
        dropdownList.classList.remove("hidden");
    } else {
        console.log("yey");
        dropdownList.classList.remove(".is_active");
        dropdownList.classList.add("hidden");
    }
});
//a doua sectiune

// a treia sectiune
